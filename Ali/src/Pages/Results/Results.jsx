import React, { useEffect, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoint";
import ProductCard from "../../Component/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <Layout>
      <section className="p-6">
        <h1 className="text-2xl font-semibold mb-4 capitalize">
          {categoryName} Products
        </h1>
        <div className="grid grid-cols-4 gap-6">
          {results.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
