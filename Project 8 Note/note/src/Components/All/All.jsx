import React, { useEffect, useState } from 'react'
import './All.css'
import { RiStickyNoteAddLine }       from 'react-icons/ri'
import NoteAdd                       from '../NoteAdd/NoteAdd'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';


const All = () => {
  // ================================= custom UseStates
  const [adder,setAdder]       = useState(false)
  const [todoData,setTodoData] = useState([])


  // ================================= Redux variables
  const currentUser = useSelector(state=>state.userData.value)


  // ================================= fireBase variables
  const db = getDatabase();


  // ================================== Reading Data from RealTime DataBase
  useEffect(()=>{
    onValue(ref(db, 'todoData/'), (snapshot) => {
      let arr    = []
      snapshot.forEach((item)=>{
        const uid = item.val()?.userUID
        if (uid == currentUser.uid) {
          arr.push({...item.val() , key:item.key})
        }
      })
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
      {/* ================================= Single note cards ============== */}
      <div className = "Notes">
        {
          todoData.map((data)=>(
          <div style={
            {
              backgroundColor: data.color,
            }
          } key={data.key} className = "singleNoteCard">
            <h2>{data?.title}</h2>
            <p>
              {data?.note}
            </p>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default All