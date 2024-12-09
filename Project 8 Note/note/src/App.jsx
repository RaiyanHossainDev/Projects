import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Pin from './Components/Pin/Pin'
import All from './Components/All/All'
import Bin from './Components/Bin/Bin'


function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Layout/>}>
          <Route index element={<All/>} />
          <Route path='/pinNote' element={<Pin/>} />
          <Route path='/bin' element={<Bin/>} />
        </Route>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={myRouter} />
      <ToastContainer />
    </>
  )
}

export default App
