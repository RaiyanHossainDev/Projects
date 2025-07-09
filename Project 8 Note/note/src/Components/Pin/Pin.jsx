import React, { useEffect, useState } from 'react'
import './Pin.css'
import { TbDotsCircleHorizontal } from 'react-icons/tb'
import { RiUnpinLine } from 'react-icons/ri'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { getDatabase, ref, onValue, update, remove, push, set } from "firebase/database";
import { useSelector } from 'react-redux'
import NoteAdd from '../NoteAdd/NoteAdd'


const Pin = () => {
  // ====================== custom useStates
  const [uniqueKey,setUniqueKey] = useState({key:'',show:''})
  const [allNote , setAllNote]   = useState([])
  const [editData,setEditData]     = useState()
  const [adder,setAdder]           = useState(false)

  
  // ========================= Redux variables
  const currentUser = useSelector(sate=>sate.userData.value)
  // ========================= fireBase variables
  const db = getDatabase();

  // ======================== All functions 
  let handleUnpin = (uniqueKey)=>{
    update(ref(db,'todoData/'+ uniqueKey),{
      is_pinned: false,
    })
  }
  // ========= Delete function
    let handleTrash = (item)=>{
      // ======= removing
      remove(ref(db, 'todoData/'+ item.key))
      // ======= sending to trash
      set(push(ref(db, "binData/"),{
        title : item.title,
        note: item.note,
        color: item.color,
        is_pinned: item.is_pinned,
        userUID: item.userUID
      }))
    } 
  // ========== Edit Function
  let handleEdit = (data)=>{
    setAdder(true)
    setEditData(data)
  }
  // ======================== reading Data form DataBase
  useEffect(()=>{
    onValue(ref(db, 'todoData/'), (snapshot) => {
          let arr    = []
          snapshot.forEach((item)=>{
              if (item.val().userUID == currentUser.uid) {
                arr.push({...item.val() , key:item.key})
              }
          })
          setAllNote(arr)
        });
  },[])

  return (
    <section id='pinPage'>
      <h1 className='text-2xl text-center font-manrope'>Your  Pinned Notes are here</h1>
      <div className="pinNote">
        {/* single notes */}
        {
          allNote.map((data)=>{
            if (data.is_pinned == true) {
              return(
                <div style={
                  {
                    backgroundColor: data.color,
                  }
                } key={data.key} className="singlePinNote">
                  <h2>{data.title}</h2>
                  <p>
                    {data.note}
                  </p>
                  <div className="buttons">
                    <TbDotsCircleHorizontal onClick={()=>setUniqueKey((prev)=>({...prev, key:data.key , show:!uniqueKey.show}))} />
                    <div className={`events ${uniqueKey.show && uniqueKey.key == data.key?'bottom-1': 'bottom-[-38px]'}`}>
                        <RiUnpinLine onClick={()=>{handleUnpin(data.key),setUniqueKey((prev)=>({...prev,show:false}))}} className='text-yellow-300' />
                        <FaTrash onClick = {()=>handleTrash(data)} className='text-red-400' />
                        <FaEdit  onClick = {()=>handleEdit(data)} className='text-blue-300' />
                    </div>
                  </div>
                </div>
                
              )
            }
          })
        }
      </div>
      <NoteAdd setEditData={setEditData} editData={editData} slideValue = {adder} cross = {setAdder}/>
    </section>
  )
}

export default Pin