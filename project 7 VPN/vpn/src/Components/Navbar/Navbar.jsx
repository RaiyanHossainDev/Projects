import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='menu'>
            <div className="container">
                <div className="row">
                    <div className="menu_logo">
                        <Link to={'/'}><img src="images/Logo.png" alt="logo" /></Link>
                    </div>
                    <ul className='main_menu'>
                        <li><Link to={'#'}>About</Link></li>
                        <li><Link to={'#'}>Features</Link></li>
                        <li><Link to={'#'}>Pricing</Link></li>
                        <li><Link to={'#'}>Testimonials</Link></li>
                        <li><Link to={'#'}>Help</Link></li>
                    </ul>
                    <div className="menu_buttons">
                        <Link to={'#'} className='btn-one'>Sign In</Link>
                        <Link to={'#'} className='btn-two'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar