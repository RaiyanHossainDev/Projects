import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { FaBarsProgress } from "react-icons/fa6";


const mobileNavbar = () => {
  // ================= useStates
  const [toggle,setToggle] = useState('')

  let handleToggle = ()=>{
    setToggle(!toggle)
  }

  return (
    <>
      <nav className='res_menu'>
        <div className="container">
          <div className="row">
            <div className="logo">
              <Link to={'/'}><img src="images/Logo.png" alt="" /></Link>
            </div>
            <div onClick={handleToggle} className="res_dropdown_btn">
              <FaBarsProgress />
            </div>
            <div className="res_buttons">
              <Link className='res_btn-one'>Sign In</Link>
              <Link className='res_btn-two'>Sign Up</Link>
            </div>
          </div>
            {
              toggle &&
                <ul>
                  <li><Link to={'/'}>About</Link></li>
                  <li><Link to={'/'}>Features</Link></li>
                  <li><Link to={'/'}>Pricing</Link></li>
                  <li><Link to={'/'}>Testimonials</Link></li>
                  <li><Link to={'/'}>Help</Link></li>
                </ul>
            }
        </div>
      </nav>
    </>
  )
}

export default mobileNavbar