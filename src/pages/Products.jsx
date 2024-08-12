import { Filter, PaginionContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = '/api/v1/products'
export const loader = async({request})=>{

  const {data} = await customFetch.get(url)
  const products = data.data;
  const meta = data.metadata



  return{products ,meta,}
  
}
export default function Products() {
  return (
    <div>
      {/* <Filter/> */}
      <ProductsContainer/>
      {/* <PaginionContainer/> */}
    </div>
  )
}