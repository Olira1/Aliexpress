import React from 'react'

function LowerHeader() {
  return (
    <div className="flex gap-3 pl-2 py-2 bg-[#232f3e] text-white cursor-pointer">
      <select
        name=""
        id=""
        className="hover:border-1 border-solid border-amber-50"
      >
        <option value="">All</option>
      </select>

      <div className="flex gap-3">
        <p className="hover:border-1 border-solid border-amber-50">
          Today's deals
        </p>
        <p className="hover:border-1 border-solid border-amber-50">
          Costumer Service
        </p>
        <p className="hover:border-1 border-solid border-amber-50">Regisry</p>
        <p className="hover:border-1 border-solid border-amber-50">
          Gift Cards
        </p>
        <p className="hover:border-1 border-solid border-amber-50">Sell</p>
      </div>
    </div>
  );
}

export default LowerHeader