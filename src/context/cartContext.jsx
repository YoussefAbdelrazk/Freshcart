import { createContext, useContext, useState } from "react";
import { customFetch } from "../utils";



const CartContext = createContext()


 export const CartProvider = ({children}) => {
  const [cartitems, setCartitems] = useState(null)


  const AddProduct = async(productId) => {
    let {data} = await customFetch.post('/api/v1/cart',{productId},{
      headers: {
        token : localStorage.getItem('token'),
      }
    })
    setCartitems(data)

  }
  console.log(cartitems)
  
  

  return <CartContext.Provider value={{AddProduct}}>
    {children}
  </CartContext.Provider>
}

  export const useCartGlobalContext = () => {
    return useContext(CartContext)
  }
  
