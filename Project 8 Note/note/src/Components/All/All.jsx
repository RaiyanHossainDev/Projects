import React, { useEffect, useState } from 'react'
import './All.css'
import { RiStickyNoteAddLine, RiUnpinLine }                     from 'react-icons/ri'
import NoteAdd                                                  from '../NoteAdd/NoteAdd'
import { getDatabase, ref, onValue, update, remove, set, push } from "firebase/database";
import { useSelector }                                          from 'react-redux';
import { TbDotsCircleHorizontal }                               from 'react-icons/tb';
import { MdOutlinePushPin }                                     from 'react-icons/md';
import { FaEdit, FaTrash }                                      from 'react-icons/fa';
import { Link }                                                 from 'react-router-dom';
import { Bounce, toast }                                        from 'react-toastify';
import { ImCross }                                              from 'react-icons/im';


const All = () => {
  // ================================= custom UseStates
  const [adder,setAdder]           = useState(false)
  const [todoData,setTodoData]     = useState([])
  const [uniqueKey,setUniqueKey]   = useState({key:'',show:''})
  const [morePin,setMorePin]       = useState(false)
  const [somePinned,setSomePinned] = useState([])

  // ================================= Redux variables
  const currentUser = useSelector(state=>state.userData.value)

  // ================================= fireBase variables
  const db = getDatabase();

  // ============================================ All Functions
  // ============= Pin Function
  let handlePin = (uniqueKey)=>{
    update(ref(db, 'todoData/' + uniqueKey),{
      is_pinned: true,
    })
  }
  // =================== unpin function
  let handleUnpin = (uniqueKey)=>{
    update(ref(db, 'todoData/' + uniqueKey.key),{
      is_pinned: false,
    })
  }
  // ================= Delete function
  let handleTrash = (item)=>{
    // ======= sending to trash
    set(push(ref(db, "binData/")),{
      title    : item.title,
      note     : item.note,
      color    : item.color,
      is_pinned: item.is_pinned,
      userUID  : item.userUID ,
    })
    // ======= removing
    remove(ref(db, 'todoData/'+ item.key))
  }


  // ================================== Reading Data from RealTime DataBase
  useEffect(()=>{
    onValue(ref(db, 'todoData/'), (snapshot) => {
      let arr    = []
      let pinned = []
      snapshot.forEach((item)=>{
          if (item.val().userUID == currentUser.uid) {
            arr.push({...item.val() , key:item.key})
            if (item.val().is_pinned == true) {
              pinned.push({...item.val() , key:item.key})
            }
          }
      })
      if (pinned.length > 3) {
        const somePinned = pinned.slice(0,3)
        setMorePin(true)
        setSomePinned(somePinned)
      }else{
        setMorePin(false)
        setSomePinned(pinned)
      }
      setTodoData(arr)
    });
  },[])


  
  

  return (
    <section id = 'All'>
      {/* ==================== ADD box =============== */}
      <div className = "addBox" onClick = {()=>setAdder(true)}>
        <h2>Add Note</h2>
        <RiStickyNoteAddLine />
      </div>
      {/* ====================== Adder calling =========== */}
      <NoteAdd slideValue = {adder} cross = {setAdder}/>
      <div     className  = "line"></div>
      {/* =========================================== Pinned Notes =========================================== */}
      <div className = "pinNote relative">
        {
          somePinned.map((data)=>{
            if (data.is_pinned == true){
              return(
                <div key={data.key} style={
                  {
                    backgroundColor: data.color,
                  }
                } className = "singlePinNote">
                  <h2>{data?.title}</h2>
                  <p>
                    {data?.note}
                  </p>
                  <div                    className = "buttons">
                  <TbDotsCircleHorizontal onClick   = {()=>setUniqueKey((prev)=>({...prev, key:data.key , show:!uniqueKey.show}))} />
                  <div                    className = {`events ${uniqueKey.show && uniqueKey.key == data.key?'bottom-1': 'bottom-[-38px]'}`}>
                  <RiUnpinLine            onClick   = {()=>{handleUnpin(data),setUniqueKey((prev)=>({...prev,show:false}))}} className = 'text-yellow-300' />
                  <FaTrash                onClick   = {()=>handleTrash(data)} className                                                = 'text-red-400' />
                  <FaEdit                 className = 'text-blue-300' />
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
        {
          morePin&&
          <Link to        = {'/pinNote'} className = "morePin py-2 px-4 rounded-md bg-yellow-400 absolute right-0 cursor-pointer">
          <h3   className = 'text-2xl text-blue-400'>See more</h3>
          </Link>
        }
      </div>
      <div className = "line"></div>
      {/* ================================= Single note cards ============== */}
      <div className = "Notes">
        {
          todoData.map((data)=>{
            if (data.is_pinned == false) {
              return(
                <div key={data.key} style={
                  {
                    backgroundColor: data.color,
                  }
                } className = "singleNoteCard">
                  <h2>{data?.title}</h2>
                  <p>
                    {data?.note}
                  </p>
                  <div                    className = "buttons">
                  <TbDotsCircleHorizontal onClick   = {()=>setUniqueKey((prev)=>({...prev, key:data.key , show:!uniqueKey.show}))} />
                  <div                    className = {`events ${uniqueKey.show && uniqueKey.key == data.key?'bottom-1': 'bottom-[-38px]'}`}>
                  <MdOutlinePushPin       onClick   = {()=>{handlePin(data.key),setUniqueKey((prev)=>({...prev,show:false}))}} className = 'text-yellow-300' />
                  <FaTrash                onClick   = {()=>handleTrash(data)}className                                                   = 'text-red-400' />
                  <FaEdit                 className = 'text-blue-300' />
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </section>
  )
}

export default All