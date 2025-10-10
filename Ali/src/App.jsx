import { useState } from 'react'
import Header from './Component/Head/Header';
import CarouselFile from './Component/Carousel/CarouselFile'
import Category from './Component/Category/Category';
import Product from './Component/Product/Product';


export default function App() {
  return (
    <>
      <Header />
      <CarouselFile />
      <Category />
      <Product />
    </>
  );
}
