import { useState } from 'react'
import Header from './Component/Head/Header';
import CarouselFile from './Component/Carousel/CarouselFile'
import Category from './Component/Category/Category';


export default function App() {
  return (
    <>
      <Header />
      <CarouselFile />
      <Category />
    </>
  );
}
