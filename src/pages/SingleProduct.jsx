

import { useLoaderData } from 'react-router-dom';
import {  customFetch,generateAmount} from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';


import { useCartGlobalContext } from '../context/cartContext';
const url = '/api/v1/products'
export const loader = async({params})=>{
  const {id} = params;
  const {data} = await customFetch.get(`${url}/${id}`)
  const product = data.data;
  return{product}

}

export default function SingleProduct() {
  const {AddProduct} = useCartGlobalContext()

  const [amount,setAmount]=useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }
  

  const {product} = useLoaderData()

console.log(product)

  const {id,title,imageCover,price,description,category}= product;




  

  
  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
      {/* product */}
      <div  className=' mt-6 grid gapy-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* iamge */}
        <img src={imageCover} alt={title} className='w-96 h-96 object-cover  rounded-lg lg:w-full' />
            {/* product Details */}
            <div>
              <h1 className='text-3xl font-bold capitalize'> {title}</h1>
              <h4 className='text-xl text-neutral-content font-bold mt-2'>{category.name}</h4>
              <p className='mt-3 text-xl' >{price} EG</p>
              <p className='mt-6 leading-8'>{description}</p>
              <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmount(10)}
            </select>
          </div>
              <div className="mt-10">
                <button onClick={()=>AddProduct(id)} className='btn btn-secondary btn-md'>
                  Add to Cart
                </button>
              </div>
            </div>
      </div>
    </section>
  )
}