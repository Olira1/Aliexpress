import React, { useEffect, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoint";
import ProductCard from "../../Component/Product/ProductCard";

function Productdetail() {
  const { productsID } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productsID}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [productsID]);

  if (loading) {
    return (
      <Layout>
        <div className="p-6 text-center">Loading product details...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 flex justify-center">
        <ProductCard data={product} />
      </div>
    </Layout>
  );
}

export default Productdetail;
