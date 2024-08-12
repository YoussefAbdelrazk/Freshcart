import { createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils";


const userSlice = createSlice({
  name : 'user',
  initialState:{
    token : null,
    name : ''
  },
  reducers:{
    Login :  async(state,action)=>{
      const values = action.payload
      // await customFetch.post('',)
      console.log(values)

    }
  }
})

export const {Login} = userSlice.actions;
export default userSlice.reducer