import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { customFetch } from '../../utils';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
      const getStateFromLocal = () => {
        return JSON.parse(localStorage.getItem('cart')) || defaultState
      }
      
const cartSlice = createSlice({
  name: 'cart',
  initialState: getStateFromLocal(),
  reducers: {
    addItem:async(state,action)=>{
        const {id} = action.payload
        const response = await customFetch.post('/api/v1/cart',{id},{
          headers : {
            token : localStorage.getItem('token'),
          }
        })
        console.log(response)

      
      toast.success('Item added to cart');

    },
    clearCart: (state) => {},

    removeItem: (state, action) => {},
    editItem: (state, action) => {},
    calcTotals:(state)=>{
      
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
})

export const{addItem,removeItem,clearCart,editItem} = cartSlice.actions

export default cartSlice.reducer