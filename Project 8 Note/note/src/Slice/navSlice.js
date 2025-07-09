import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'counter',
  initialState: {
    value: false
  },
  reducers: {
    navValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { navValue } = navSlice.actions

export default navSlice.reducer