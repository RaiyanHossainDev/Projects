import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification , updateProfile } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';
import Sound from '/sound/registered.mp3'



const Register = () => {
    // ================ custom UseStates
    const [eye ,setEye]    = useState(false)
    const [form ,setForm]  = useState({email:'' , password: '' , username:'',})
    const [error,setError] = useState({emailError: '' ,passwordError: '',usernameError:'',})
    const navigate = useNavigate()
    // ============= FireBase Variables
    const auth = getAuth();

    // ============= sound function
    const sound = ()=>{
        new Audio(Sound).play()
    }
    

    // Regsiter validation Function
    const handleClick = (e)=>{
        e.preventDefault()
        if (form.email == '') {
            setError((prev)=>({...prev , emailError: '2px solid #EB5B00'}))
        }else if (form.username == '') {
            setError((prev)=>({...prev , usernameError: '2px solid #EB5B00'}))
        }else if(form.password == ''){
            setError((prev)=>({...prev , passwordError: '2px solid #EB5B00'}))
        }else{
            // ================= After All validation Complete
            createUserWithEmailAndPassword(auth, form.email, form.password)
                .then((userCredential) => {
                    // =========== after succsesfully registered
                    const user = userCredential.user;

                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // ========== showing toast
                        toast.success('You have Successfully Regsiterd', {
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
                            // =========== updating user's profile
                            updateProfile(auth.currentUser, {
                                displayName: form.username,
                                photoURL: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png",
                              }).then(() => {
                                // Profile updated!
                                // ...
                              }).catch((error) => {
                                // An error occurred
                                // ...
                              });
                        // =========== using sound effect
                        sound()
                        // ========= Navigating
                        navigate('/')
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode == 'auth/email-already-in-use') {
                        toast.error('This Email is already used', {
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
                    if (errorCode == 'auth/weak-password') {
                        toast.info('This password is weak', {
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
                    if (errorCode == 'auth/invalid-email') {
                        toast.info('Please enter a correct Email', {
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
                });
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
                    <div className="user_box relative">
                        <label>Email​ Address</label>
                        <input onChange={(e)=>{
                            setForm((prev)=>({...prev , email:e.target.value})),setError((prev)=>({...prev , emailError: '1px solid #595959'
                            
                            }))}} type="email" placeholder='Enter your email' style={
                            {
                                borderBottom: error.emailError,
                            }
                        } />
                    </div>
                    <div className="user_box relative">
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
            <h3>Already have an account ?<Link to={'/'}> Login</Link></h3>
            <img src="images/circle.png" alt="" />
        </div>
    </section>
  )
}

export default Register