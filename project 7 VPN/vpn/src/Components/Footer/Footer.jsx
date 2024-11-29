import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer id='ryan_footer'>
        <div className="container">
            <div className="footer_row">
                <div className="footer_head">
                    <img src="images/Logo.png" alt="footer image" />
                    <p className='mt-[20px] text-[#4F5665] font-rubik font-normal w-[340px]'>
                        <span className='font-medium'>LaslesVPN</span> is a private virtual network that has unique features and has high security.
                    </p>
                    <div className="medias">
                        <a href='#'><img src="images/Facebook.png" alt="facebook" /></a>
                        <a href='#'><img src="images/Twitter.png" alt="twiter" /></a>
                        <a href='#'><img src="images/Instagram.png" alt="insta" /></a>
                    </div>
                    <div className="lisens">
                        <p className='text-[#AFB5C0] font-normal mt-[30px] font-rubik'>©2020LaslesVPN</p>
                    </div>
                </div>
                <div className="main flex gap-[126px]">
                    <div className="links flex flex-col gap-[10px]">
                        <h2 className='text-[#0B132A] text-[18px] font-medium font-rubik'>Product</h2>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Download </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Pricing </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Locations </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Server </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Countries </a>
                    </div>
                    <div className="links flex flex-col gap-[10px]">
                        <h2 className='text-[#0B132A] text-[18px] font-medium font-rubik'>Engage</h2>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>LaslesVPN ?  </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>FAQ </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Tutorials </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>About Us </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Privacy Policy </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Terms of Service </a>
                    </div>
                    <div className="links flex flex-col gap-[10px]">
                        <h2 className='text-[#0B132A] text-[18px] font-medium font-rubik'>Earn Money</h2>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Affiliate </a>
                        <a className='text-[#4F5665] font-normal font-rubik hover:text-gray-700' href='#'>Become Partner </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer