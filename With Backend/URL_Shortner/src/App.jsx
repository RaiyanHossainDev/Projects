import { useState } from 'react'
import { FiSun, FiMoon, FiLink, FiCopy } from "react-icons/fi";
import './App.css'
import axios from 'axios';

function App() {
  const [realUrl,setRealUrl] = useState('')
  const [data,setData] = useState([])
  
  
  const handleSendUrl = ()=>{
    if (realUrl === '') {
      alert('Pls Give a URL')
    }else{
      axios.post('http://localhost:8000/url/urlShortner',{
        url:realUrl,
      })
      .then(response=>setData(prev => [...prev, response.data]))
      .catch(err=>console.log(err))
      setRealUrl('')
      alert('Shorten')
    }
  }


  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 p-6">
        <div className="w-[576px] mx-auto flex flex-col gap-6">
          <header className="flex justify-between items-center text-3xl font-bold">
            <span className="flex items-center gap-2"><FiLink /> SimpleShort</span>
          </header>
          <div className="flex gap-2">
            <input value={realUrl} onChange={(e)=>setRealUrl(e.target.value)} type="text" placeholder="Paste your URL here..." className="flex-1 p-3 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none"/>
            <button onClick={()=>handleSendUrl()} className="bg-violet-600 text-white px-4 rounded-xl hover:bg-violet-700 transition cursor-pointer">Shorten</button>
          </div>
          {
              data.map((item)=>(
                <div key={item.shortenUrl} className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                    <div>
                      <span className="text-[13px] text-slate-500 dark:text-slate-400">{item.url}</span><br/>
                      <a target='_blank' href={item.shortenUrl} className="font-semibold text-violet-600 dark:text-violet-400 hover:underline">{item.shortenUrl}</a>
                    </div>
                    <button title='Copy' className="hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer"><FiCopy /></button>
                  </div>
                </div>
              ))            
          }
        </div>
      </div>
    </>
  )
}

export default App
