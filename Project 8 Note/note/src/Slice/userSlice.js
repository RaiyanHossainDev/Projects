import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : null,
  },
  reducers: {
    userData: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { userData } = userSlice.actions

export default userSlice.reducer