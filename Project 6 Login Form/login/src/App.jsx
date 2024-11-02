import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register'


function App() {
  let myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myrouter} />
      <ToastContainer />
    </>
  )
}

export default App
