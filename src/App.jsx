


import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Orders,Landing,Cart,Checkout,Login,Register,Products,SingleProduct,Error,HomeLayout,About,Categories,Brands,WishList } from './pages'
import { ErrorElement } from './components'
import { loader as Landingloader } from './pages/Landing'
import { loader as SingleLoader } from './pages/SingleProduct'
import {  loader as ProductsLoader} from './pages/Products'
import {  loader as CategoriesLoader} from './pages/Categories'
import {  loader as BrandsLoader} from './pages/Brands'
import {  loader as WishListLoader} from './pages/WishList'
import {  loader as CartLoader} from './pages/Cart'
import { UserProvider } from './context/userContext'
import ProtectRoute from './components/ProtectRoute'

function App() {

  const router = createBrowserRouter([
    {path:'/',element: <ProtectRoute><HomeLayout/></ProtectRoute>  ,errorElement:<Error/>, children:[
       {index:true,element:<><Landing/></>,errorElement:<ErrorElement/>,loader:Landingloader},
       {path:'/about',element:<ProtectRoute><About/></ProtectRoute>},
       {path:'/cart',element:<ProtectRoute><Cart/></ProtectRoute>,loader:CartLoader},
       {path:'/wishlist',element:<ProtectRoute><WishList/></ProtectRoute>,loader:WishListLoader},
       {path:'/products',element:<ProtectRoute><Products/></ProtectRoute>, errorElement:<ErrorElement/>,loader:ProductsLoader},
       {path:'/products/:id',element:<ProtectRoute><SingleProduct/></ProtectRoute>,loader:SingleLoader,errorElement:<ErrorElement/>},
       {path:'/orders',element:<Orders/>},
       {path:'/categories',element:<ProtectRoute><Categories/></ProtectRoute>,loader:CategoriesLoader},
       {path:'/brands',element:<ProtectRoute><Brands/></ProtectRoute> ,loader:BrandsLoader},
    ]},

    {path:'/login',element:<Login/> ,errorElement:<Error/>},
    {path:'/register',element:<Register/> ,errorElement:<Error/>},

  ])

      return( <>
            <RouterProvider router={router}></RouterProvider>
            </>
          )
    
}

export default App
