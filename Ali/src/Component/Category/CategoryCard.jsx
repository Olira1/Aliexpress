import React from "react";

function CategoryCard({ data }) {
  return (
    <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col justify-between">
      <a href="#" className="block h-full">
        <div className="p-2">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <div className="flex justify-center">
            <img
              src={data.image}
              alt={data.title}
              className="h-85 w-auto object-contain"
            />
          </div>
        </div>
        <p className="text-blue-600 text-sm font-medium pl-3 pb-3 hover:underline">
          shop now
        </p>
      </a>
    </div>
  );
}

export default CategoryCard;
