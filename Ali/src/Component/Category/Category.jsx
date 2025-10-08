import React from "react";
import { CategoryImage } from "./Image/fullData";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <section className="relative -my-50 grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8 ">
      {CategoryImage.map((info) => {
        return <CategoryCard data = {info} />
      }
      )}
    </section>
  );
}

export default Category;
