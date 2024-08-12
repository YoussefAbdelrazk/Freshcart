
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* info */}
          <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We’re changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div>
      </div>
          {/* slider */}
          <div className="hidden lg:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box">
                {carouselImages.map((image)=>{
                  return <div key={image} className=' carousel-item'>
                    <img className=' object-cover rounded-box w-full w-80' src={image} alt="" />
                  </div>
                })}
          </div>
    </div>
  )
}