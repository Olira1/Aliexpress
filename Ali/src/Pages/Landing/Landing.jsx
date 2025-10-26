import React from "react";
import Layout from "../../Component/Layout/Layout";
import CarouselFile from "../../Component/Carousel/CarouselFile";
import Category from "../../Component/Category/Category"
import Product from "../../Component/Product/Product"

function Landing() {
  return (
    <Layout>
      <CarouselFile />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
