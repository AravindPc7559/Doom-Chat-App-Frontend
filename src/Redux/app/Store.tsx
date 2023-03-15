import { configureStore } from '@reduxjs/toolkit'
import SideBarFeature from '../Features/SideBarFeature'
import ModalFeatures from '../Features/ModalFeatures'

const store = configureStore({
  reducer: {
    SideBar: SideBarFeature,
    MainModal: ModalFeatures,
  },
})

export default store
