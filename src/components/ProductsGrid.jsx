import { Link, useLoaderData } from "react-router-dom"




export default function ProductsGrid() {
  const {products} = useLoaderData()

  return (
    <div className=" grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          products.map((product)=>{
            const{title ,imageCover,price}=product
    
            return <Link key={product.id} to={`/products/${product.id}`}  className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
              <figure className="px-4 pt-4">
                  <img src={imageCover} alt={title} className="rounded-xl h-64 md:h-48 w-full object-contain " />
              </figure>
              <div className="card-body items-center text-center">
                  <h2 className=" card-title tracking-wider capitalize"> {title}</h2>
                  <span className="text-secondary">{price}</span>
              </div>
            </Link>
          })
        }

    </div>
  )
}