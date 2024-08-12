import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './features/Cart/cartSlice'
import userSlice from './features/User/userSlice'

export const store = configureStore({
  reducer:{
    cartState:cartReducer,
    userState:userSlice,
  }
})