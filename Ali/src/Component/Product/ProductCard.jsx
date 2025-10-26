import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'

function ProductCard({data}) {
    const {image,title,id,price,rating} = data

  return (
    <div className=" group relative h-[350px] shadow-[2px_2px_3px_-1px_rgba(0,0,0,0.3),_-2px_-2px_3px_-1px_rgba(0,0,0,0.3)] box-border mx-2 mb-5 rounded-md">
      <Link to = {`/products/${id}`}>
        <img src={image} alt="" className="object-contain w-full h-[200px] " />
      </Link>
      <div>
        <h1 className="break-words ml-1">{title}</h1>
        <div className="flex items-center ml-1">
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} className="" />
          {/* rating count */}
          <small>{rating.count}</small>
        </div>
        <div className="ml-1">
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className="hidden group-hover:block bg-amber-500 transition-all duration-200 border-solid border-amber-500 border-2 rounded-md px-23 absolute top-79 mx-auto cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard