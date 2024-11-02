import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center gap-[20px]'>
        <h1 className='text-6xl text-orange-600 bg-slate-500 p-[20px] rounded-3xl'>This is Home page</h1>
        <Link className='text-4xl text-white p-[10px] bg-pink-400 rounded-2xl' to={'/Login'}>Login</Link>
        <Link className='text-4xl text-white p-[10px] bg-pink-400 rounded-2xl' to={'/register'}>Register</Link>
    </div>
  )
}

export default Home