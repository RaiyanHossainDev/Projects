import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import HomePage from './pages/homePage'
import DashBoardPage from './pages/DashBoardPage'

function App() {
  const router = createBrowserRouter(createRoutesFromChildren(
    <Route path='/' element={<Layout/>} >
      <Route index element={<HomePage/>} />
      <Route path='/dashboard' element={<DashBoardPage/>} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
