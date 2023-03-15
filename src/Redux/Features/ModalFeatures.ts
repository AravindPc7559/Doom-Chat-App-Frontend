import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggleModal: '',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toogleReducer: (state, action) => {
      state.toggleModal = action.payload
    },
  },
})

export default modalSlice.reducer

export const { toogleReducer } = modalSlice.actions
