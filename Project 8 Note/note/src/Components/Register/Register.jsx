import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";



const Register = () => {
    // ================ custom UseStates
    const [eye ,setEye]    = useState(false)
    const [form ,setForm]  = useState({email:'' , password: '' , username:'',})
    const [error,setError] = useState({emailError: '' ,passwordError: '',usernameError:'',})   
    
    const handleClick = (e)=>{
        e.preventDefault()
        if (form.email == '') {
            setError((prev)=>({...prev , emailError: '2px solid #EB5B00'}))
        }else if (form.username == '') {
            setError((prev)=>({...prev , usernameError: '2px solid #EB5B00'}))
        }else if(form.password == ''){
            setError((prev)=>({...prev , passwordError: '2px solid #EB5B00'}))
        }
            
    }
    



  return (
    <section id='register'>
        <div className="register">
            <div className="register_head">
                <h2>Create an account</h2>
            </div>
            <form action=''>
                <div className='flex flex-col gap-[34px]'>
                    <div className="user_box">
                        <label>Email​ Address</label>
                        <input onChange={(e)=>{setForm((prev)=>({...prev , email:e.target.value})),setError((prev)=>({...prev , emailError: '1px solid #595959'}))}} type="email" placeholder='Enter your email' style={
                            {
                                borderBottom: error.emailError,
                            }
                        } />
                    </div>
                    <div className="user_box">
                        <label>User Name</label>
                        <input onChange={(e)=>{setForm((prev)=>({...prev , username:e.target.value})),setError((prev)=>({...prev , usernameError:'1px solid #595959'}))}} type="text" placeholder='Enter your UserName' style={
                            {
                                borderBottom: error.usernameError,
                            }
                        } />
                    </div>
                    <div className="user_box relative">
                        <label>Password</label>
                        <input onChange={(e)=>{setForm((prev)=>({...prev , password:e.target.value})),setError((prev)=>({...prev, passwordError:'1px solid #595959'}))}} type={eye?'text':'password'} placeholder='Enter your Password' style={
                            {
                                borderBottom: error.passwordError,
                            }
                        } />
                        {
                            eye?
                            <IoEye onClick={()=>setEye(!eye)}/>
                            :
                            <IoEyeOffSharp onClick={()=>setEye(!eye)}/>
                        }
                    </div>
                </div>
                <button onClick={(e)=>handleClick(e)} type='submit'>Create an account</button>
            </form>
            <h3>Already have an account ?<Link to={'#'}> Login</Link></h3>
            <img src="images/circle.png" alt="" />
        </div>
    </section>
  )
}

export default Register