import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

function Product() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <section className='flex mt-60 grid grid-cols-4 w-[90%] m-auto'>
      {products.map((singleProduct) => {
        return (
          <ProductCard
            data={singleProduct}
            key={singleProduct.id} 
          />
        );
      })}
    </section>
  );
}

export default Product