import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import MobileNav from '../Components/MobileNavbar/MobileNav'

const LayoutOne = () => {
  return (
    <div>
        <Navbar/>
        <MobileNav />
        <Outlet/>
    </div>
  )
}

export default LayoutOne