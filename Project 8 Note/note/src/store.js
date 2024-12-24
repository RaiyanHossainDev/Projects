import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slice/UserSlice.js'

export default configureStore({
  reducer: {
    userData: userSlice,
  }
})