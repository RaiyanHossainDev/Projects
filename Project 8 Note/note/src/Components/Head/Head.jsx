import React from 'react'
import './Head.css'
import { FiSearch } from 'react-icons/fi'
import { IoIosLogOut } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from '../../slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'


const Head = () => {
    // ================= Redux variables
    const currentUserData = useSelector((state)=>state.userData.value)
    const dispath         = useDispatch()
    const navigator       = useNavigate()


    // =================== Log out function
    let LogOut = ()=>{
        localStorage.removeItem('data')
        dispath(userData(null))
        navigator('/login')
        toast.success('Log Out successfull', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

    
  return (
    <header>
        <div className="header_row">
            <div className='flex gap-10 items-center'>
                <div className="header_image">
                    <img src="images/logo.png" alt="logo" width='200px' />
                </div>
                <div className="header_search">
                    <div className="searchBar">
                        <FiSearch />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="userName">
                    <h2>{currentUserData?.displayName}</h2>
                </div>
                <div className="userPic">
                    <img src={currentUserData?.photoURL} width={'30px'} alt="userPic" />
                </div>
                <div onClick={()=>{
                    LogOut()
                }} className="logout">
                    <IoIosLogOut className='text-[30px] cursor-pointer' />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Head