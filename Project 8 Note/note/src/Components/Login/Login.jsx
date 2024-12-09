import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate }                   from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IoEye, IoEyeOffSharp }                from 'react-icons/io5';
import { Bounce, toast }                       from 'react-toastify';
import { useDispatch, useSelector }            from 'react-redux';
import { userData }                            from '../../Slice/UserSlice';




const Login = () => {
  // =========================================================================== Custom useStates
  const [form,setForm]   = useState({email:'',password:''})
  const [error,setError] = useState({emailError:'',PasswordError:''})
  const [eye,setEye]     = useState(false)
  const navigator        = useNavigate()
  // ================= Redux variables
  const dispatch    = useDispatch()
  const currentUser = useSelector(state=>state.userData.value)

  // ====================================== FireBase Variables
  const auth = getAuth();
  



  // ============================================================================ Click Function
  let handleClick =  (e)=>{
    // ======= preventing reload
    e.preventDefault()
    // ===================================================== making validation
    if (form.email == '') {
      setError((prev)=>({...prev,emailError:'Please enter the Email'}))
    }else if(form.password == '') {
      setError((prev)=>({...prev,PasswordError:'Please enter the password'}))
    }else{
      // ========================== Loging in with firebase
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          const user = userCredential.user;

          if (user.emailVerified == false) {
            toast.info('Your Email is not verified', {
              position       : "top-right",
              autoClose      : 5000,
              hideProgressBar: false,
              closeOnClick   : true,
              pauseOnHover   : true,
              draggable      : true,
              progress       : undefined,
              theme          : "dark",
              transition     : Bounce,
              });
          }else{
            navigator('/')
            toast.success('Login Successfull', {
              position       : "top-right",
              autoClose      : 5000,
              hideProgressBar: false,
              closeOnClick   : true,
              pauseOnHover   : true,
              draggable      : true,
              progress       : undefined,
              theme          : "dark",
              transition     : Bounce,
              });
              dispatch(userData(user))
              localStorage.setItem("data",JSON.stringify(user))
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode == 'auth/invalid-email') {
            toast.info('Please enter a correct email', {
              position       : "top-right",
              autoClose      : 5000,
              hideProgressBar: false,
              closeOnClick   : true,
              pauseOnHover   : true,
              draggable      : true,
              progress       : undefined,
              theme          : "dark",
              transition     : Bounce,
              });
          }
          if (errorCode == 'auth/invalid-credential') {
            toast.error('Something went wrong', {
              position       : "top-right",
              autoClose      : 5000,
              hideProgressBar: false,
              closeOnClick   : true,
              pauseOnHover   : true,
              draggable      : true,
              progress       : undefined,
              theme          : "dark",
              transition     : Bounce,
              });
          }
        });
    }
  }
  
  useEffect(()=>{
    if (currentUser) {
      navigator('/')
    }
  },[])







  // =============================================================================== JSX ===================================================================================
  return (
    <section id        = 'login'>
    <div     className = "login">
    <div     className = "login_row">
    <div     className = "login_head">
              <h2>Login with your account</h2>
            </div>
            <form action    = "">
            <div  className = "user">
            <div  className = "user_box">
                  {/* ============================================================== Email ============================================= */}
                  <label>Email</label>
                  <input 
                  type = "email"

                  placeholder = 'Enter Your Email'

                  onChange={(e)=>{
                    setForm((prev)=>({...prev,email:e.target.value}))
                    setError((prev)=>({...prev,emailError:''}))
                  }}
                  />
                  <span>{error.emailError}</span>
                </div>
                <div className = "user_box relative">
                  {/* ============================================================= Password =========================================== */}
                  <label>Password</label>
                  <input 
                  type        = {eye?'text':'password'}
                  placeholder = 'Enter Your Password'
                  onChange    = {(e)=>{
                    setForm((prev)=>({...prev,password:e.target.value}))
                    setError((prev)=>({...prev,PasswordError:''}))
                  }}
                  />
                  {
                    eye?
                    <IoEye onClick = {()=>setEye(!eye)}/>
                    : 
                    <IoEyeOffSharp onClick = {()=>setEye(!eye)}/>
                  }
                  <span>{error.PasswordError}</span>
                </div>
                <p>Don't have an account? <Link to={"/register"}> Register</Link></p>
              </div>
              <button onClick = {(e)=>handleClick(e)}>Login</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Login