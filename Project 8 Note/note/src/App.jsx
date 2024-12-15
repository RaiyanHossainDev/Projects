import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AllPage from './Pages/AllPage'
import PinPage from './Pages/PinPage'
import BinPage from './Pages/BinPage'



function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Layout/>}>
          <Route index element={<AllPage/>} />
          <Route path='/pinNote' element={<PinPage/>} />
          <Route path='/bin' element={<BinPage/>} />
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
