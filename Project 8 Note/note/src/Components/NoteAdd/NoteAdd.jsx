import React, { useEffect, useState } from 'react'
import './NoteAdd.css'
import { ImCross } from 'react-icons/im'
import { IoColorPaletteOutline, IoSaveOutline } from 'react-icons/io5'
import { MdColorize, MdOutlineSecurityUpdateGood } from 'react-icons/md'
import { getDatabase, push, ref, set, update } from "firebase/database";
import { useSelector } from 'react-redux'


const NoteAdd = ({slideValue,cross,editData,setEditData}) => {
  // ============================ custom useStates
  const [palate,setPalate] = useState(false)
  const [todo,setTodo] = useState({todoTitle:'',todoNote:''})
  const [todoError,setTodoError] = useState({titleError:'',noteError:''})
  const [color,setColor] = useState('#d7d7d7')


  // ============================ Redux variables
  const currentUser = useSelector((state)=>state.userData.value)

  // ============================ FireBase Variables
  const db = getDatabase();

  // ============================================================== All Function
  // -=-=-=-=-=-=-=-=-=-=-=--=-=- edit Function
  let handleEdit = ()=>{
    update(ref(db, 'todoData/' + editData.key),{
      color : color,
      title : todo.todoTitle,
      note  : todo.todoNote,
    })
    cross(false)
  }
  // ============================ Write Function
  const handleWrite = ()=>{
      if (todo.todoTitle == '') {
        setTodoError((prev)=>({...prev , titleError:'Please enter the Title'}))
      }else if(todo.todoNote == ''){
        setTodoError((prev)=>({...prev,noteError:'Please enter your Note'}))
        console.log(true);
      }else{
          // ================================ Transfering Data to RealTime dataBase =================----------------
          set(push(ref(db, 'todoData/')), {
            'title'    : todo.todoTitle ,
            'note'     : todo.todoNote ,
            'color'    : color,
            'is_pinned': false,
            'userUID'  : currentUser.uid,
          });
          cross(false)
          setTodo((prev)=>({...prev,todoNote:'',todoTitle:'',}))
          setColor('#d7d7d7')
          setEditData(null)
        }
  }
  useEffect(()=>{
      if (editData) {
        setTodo((prev)=>({...prev , todoTitle:editData.title , todoNote:editData.note}))
      }
  },[editData])
 

  
  return (
    <section className={`${slideValue?"w-full":'w-0'} transition-all duration-500`} id='Adder'>
        <ImCross className={`cross ${slideValue?'block':'hidden'}`} onClick={()=>{cross(false),setTodo((prev)=>({...prev,todoNote:'',todoTitle:'',})),setTodoError((prev)=>({...prev ,titleError:'',noteError:''})),setEditData(null)}}  />
        <div className={`${slideValue?'block':'hidden'}`}>
          <div className='addInput' style={
            {
              backgroundColor: color,
            }
          }>
            {/* ============================== title ================================================ */}
            <label htmlFor="">Add Title</label>
            <input value={todo.todoTitle} placeholder='Title...' type="text" onChange={(e)=>{setTodo((prev)=>({...prev,todoTitle:e.target.value})),setTodoError((prev)=>({...prev,titleError:''}))}} />
            <p className='text-[20px] font-semibold text-red-500 font-manrope'>{todoError.titleError}</p>

            {/* =============================== Note ================================================= */}
            <label className='mt-[20px]' htmlFor="">What's on your mind</label>
            <textarea value={todo.todoNote} placeholder='Note....' name="" id="" onChange={(e)=>{setTodo((prev)=>({...prev,todoNote:e.target.value})),setTodoError((prev)=>({...prev,noteError:''}))}}></textarea>
            <p className='text-[20px] font-semibold text-red-500 font-manrope'>{todoError.noteError}</p>

            {/* =============================================== Color palates===================================== */}
            <div className="keys">
              <div className="colors">
                <IoColorPaletteOutline onClick={()=>setPalate(!palate)} />
                <div className={`palates ${palate?'left-10':'left-[-179px]'} transition-all`}>
                  <div onClick={()=>setColor("#00FF9C")} className="palate1"></div>
                  <div onClick={()=>setColor("#FF204E")} className="palate2"></div>
                  <div onClick={()=>setColor("#FFAF00")} className="palate3"></div>
                  <div onClick={()=>setColor("#d7d7d7")} className="palate4"></div>
                  <div className="picker">
                    <label htmlFor="picker"><MdColorize className='ml-[10px]' /></label>
                    <input onChange={(i)=>setColor(i.target.value)} id='picker' type={`color`} />
                  </div>
                </div>
              </div>
              {/* ==================================================================== Save Button ======================================= */}
              {
                editData?
                  <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-md group"
                  onClick={handleEdit}
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-600 rounded-md group-hover:translate-x-0" />
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center gap-2 text-[20px]">Update<MdOutlineSecurityUpdateGood /></span>
                  </button>
                :
                  <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-md group"
                  onClick={handleWrite}
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-600 rounded-md group-hover:translate-x-0" />
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center gap-2 text-[20px]">SAVE<IoSaveOutline/></span>
                  </button>
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default NoteAdd