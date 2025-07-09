import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slice/userSlice'
import  navSlice from './slice/navSlice'

export default configureStore({
  reducer: {
    userData: userSlice,
    navSet  : navSlice,
  }
})