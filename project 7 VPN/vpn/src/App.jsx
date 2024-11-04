import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'

function App() {
  // ==== Router
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
