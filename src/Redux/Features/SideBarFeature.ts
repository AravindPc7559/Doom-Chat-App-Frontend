import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggleSideBar: true,
}

const SideBar = createSlice({
  name: 'Sidebar',
  initialState,
  reducers: {
    openSideBar: (state, action) => {
      state.toggleSideBar = action.payload
    },
  },
})

export default SideBar.reducer

export const { openSideBar } = SideBar.actions
