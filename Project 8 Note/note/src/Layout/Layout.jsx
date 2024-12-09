import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Head from '../Components/Head/Head'
import { useSelector } from 'react-redux'

const Layout = () => {
  const userData  = useSelector((state)=>state.userData.value)
  const navigator = useNavigate()

  useEffect(()=>{
    if (userData == null) {
      navigator('/login')
    }
  },[])

  return (
    <div>
      <Head/>
        <div className='flex'>
          <Navbar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout