import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Head from '../Components/Head/Head'
import { useSelector } from 'react-redux'
import MobileNav from '../Components/MobileNav/MobileNav'

const Layout = () => {
  // =========================== custom variables
  const userData  = useSelector((state)=>state.userData.value)
  const navSet    = useSelector(state => state.navSet.value)
  const navigator = useNavigate()

  useEffect(()=>{
    if (userData == null) {
      navigator('/login')
    }
  },[])

  // ========================= function

  return (
    <div>
      <Head/>
        <div className='flex'>
            <Navbar/>
            <div className='sm:flex w-full'>
              <MobileNav/>
              <div className={`w-full ${navSet?'hidden':'block'} sm:block`}>
                <Outlet/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Layout