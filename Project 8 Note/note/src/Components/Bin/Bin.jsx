import React, { useEffect, useState } from 'react'
import './Bin.css'
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { FaTrashRestoreAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Bin = () => {
  // =================== custom useStates
  const [AllBinNotes,setAllBinNotes] = useState([])
  const [deleteAllButton,setDeleteAllButton] = useState(false)
  // =================== Redux Variables
  const currentUser = useSelector(state=>state.userData.value)
  // =================== fireBase variables
  const db = getDatabase();

  // ==================================================== All Functions
  // ======== Permannently delete function
  let handleDelete = (item)=>{
    remove(ref(db, 'binData/'+ item.key))
  }
  // ======== Delete All
  let handleDeleteAll = ()=>{
    remove(ref(db, 'binData/'))
  }
  // ======== Restore function
  let handleRestore = (allData)=>{
    remove(ref(db , 'binData/'+ allData.key))
    set(push(ref(db, 'todoData/'),{
      color: allData.color,
      is_pinned: allData.is_pinned,
      title : allData.title,
      note: allData.note,
      userUID: allData.userUID,
    }))
  }
  // =================== Reading Data from RealTime DataBase
  useEffect(()=>{
    onValue(ref(db, 'binData/'), (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        if (item.val().userUID == currentUser.uid) {
          arr.push({...item.val() , key:item.key})
        }
      })
      if (arr.length > 0) {
        setDeleteAllButton(true)
      }else{
        setDeleteAllButton(false)
      }
      setAllBinNotes(arr)
    });
  },[])
  
  return (
    <>
      <div className='p-6'>
        <div className='text-3xl text-[#ff381ef5] text-center font-bold font-manrope dark:text-8xl dark:bg-gray-800'>This is Bin</div>
        <hr className='my-5' />
        <div className="deleteAll text-right">
          {
            deleteAllButton&&
            <button onClick={handleDeleteAll}
              className="px-6 z-30 py-3 bg-rose-600 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-700 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-xl"
            >
              Delete All
            </button>
          }
        </div>
        <div className="trashNotes">
          {
            AllBinNotes.map((item)=>(
              <div key={item.key} className="singleTrashNote">
                <h2>{item.title}</h2>
                <div className="buttons flex gap-2">
                  {/* =========================== delete Button */}
                  <button onClick={()=>handleDelete(item)}
                    className="flex justify-center items-center gap-2 w-[80px] h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                  >
                    <svg viewBox="0 0 15 15" className="w-5 fill-white">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                    </svg>
                    </svg>
                  </button>
                  {/* ======================= Restore Button */}
                  <button onClick={()=>handleRestore(item)}
                  className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                > 
                  <FaTrashRestoreAlt />
                </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Bin