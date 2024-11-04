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
                        <li><Link>About</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>Pricing</Link></li>
                        <li><Link>Testimonials</Link></li>
                        <li><Link>Help</Link></li>
                    </ul>
                    <div className="res_menu_buttons">
                        <Link className='btn-one'>Sign In</Link>
                        <Link className='btn-two'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar