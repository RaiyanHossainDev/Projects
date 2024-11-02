import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    // ===== email useState
    const [email,setEmail] = useState('')
    const [emailError,setEmailError] = useState('')
    // ===== password useState 
    const [pass , setPass] = useState('')
    const [passError , setPassError] = useState('')
    let navigator = useNavigate()


    let handleEmail = (item)=>{
        setEmail(item)
        setEmailError('')
    }
    let handlePass = (item)=>{
        setPass(item)
        setPassError('')
    }

    let handleSubmit = (e)=>{
        e.preventDefault()
        if(email == ''){
            setEmailError('please enter your Email')
        }else if(pass == ''){
            setPassError('Please enter your password')
        }else{
            setEmailError('')
            setPassError('')
            toast.success(' You have successfully Loged in !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            navigator('/')
        }
        
    }

    

  return (
    <div style={{
        backgroundImage: 'url(/images/BG.jpg)',
    }} className='w-full h-screen flex justify-center items-center'>
        <div className="login px-[92px] py-[84px] bg-white rounded-xl">
            <div className="head mb-[19px]">
                <h1 className='text-[50px] font-bold font-Exo'>Login</h1>
                <p className='text-[#818181] text-[16px] font-Exo mt-[19px]'>Login your account in a seconds</p>
            </div>
            <form className='flex flex-col'>
                <input onChange={(i)=>{handleEmail(i.target.value)} } className='py-[20px] pl-[20px] border-[#D1D1D1] border-[2px] outline-[#818181] rounded-[10px] w-[422px]' type="text" placeholder='Email Address' />
                <span className='mb-[33px] text-red-500'>{emailError}</span>

                <input onChange={(i)=>handlePass(i.target.value)} className='py-[20px] pl-[20px] border-[#D1D1D1] border-[2px] outline-[#818181] rounded-[10px] w-[422px]' type="password" placeholder='Password' />
                <span className='mb-[33px] text-red-500'>{passError}</span>
                
                <a href='##' className='text-[#7754F6] w-[135px] mb-[39px]'>Forget password?</a>

                <button onClick={handleSubmit} className='bg-[#7754F6] rounded-[10px] py-[20px] text-white font-Exo'>Log in </button>
            </form>
            <h3 className='text-[#818181] font-semibold font-Exo mt-[39px]'>Don’t have an account? <Link to={'/register'} className='text-[#7754F6]'>Register</Link></h3>
        </div>
    </div>
  )
}

export default Login