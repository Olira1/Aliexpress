import React from "react";
import Amazon_logo from "./Image/Amazon_logo.svg";
import { SlLocationPin } from "react-icons/sl";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <div>
      <header className="flex justify-between bg-[#131921] text-white">
        {/* ---------- Left: Logo & Location ---------- */}
        <div className="flex items-center gap-3 cursor-pointer mb-2 mt-2">
          <img src={Amazon_logo} alt="Amazon logo" className="w-24" />
          {/* Location */}
          <div className="flex items-center gap-1">
            <SlLocationPin className="" />
            <div className="leading-5">
              <p className="text-[#d1d5dc]">Delever to</p>
              <p>Ethiopia</p>
            </div>
          </div>
        </div>
        {/* ---------- Middle: Search Bar ---------- */}
        <div className="flex flex-grow mx-6 ml-8 bg-white rounded-md overflow-hiden mb-2 mt-2">
          <select className="bg-gray-100 text-black outline-none text-sm px-3 py-2 hover:bg-gray-200">
            <option value="">All</option>
            <option value="">Electronics</option>
            <option value="">Clothes</option>
          </select>
          <input
            type="text"
            placeholder="Search Product"
            className="flex-1 px-4 pr-80 py-2 bg-white text-black outline-none"
          />

          <button className="bg-[#febd69] hover:bg-[#f3a847] p-2 flex items-center justify-center">
            <FaSearch className="text-black text-lg" />
          </button>
        </div>
        {/* ---------- Right: Account, Orders, Cart ---------- */}
        <div className="flex flex-grow text-sm justify-between mr-4 mt-2">
          <div>
            <ReactCountryFlag countryCode="US" svg />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <div className="leading-4 cursor-pointer hover:underline">
            <p className="text-[#d1d5dc]">Hello, Sign in</p>
            <p>Account & Lists</p>
          </div>
          <div className="leading-4 cursor-pointer hover:underline">
            <p className="text-[#d1d5dc]">Returns</p>
            <p>& Orders</p>
          </div>
          <div className="flex text-base gap-1 items-center cursor-pointer">
            <FaCartPlus className="size-6" />
            <span>Cart</span>
          </div>
        </div>
        
      </header>
      <LowerHeader />
    </div>
  );
}

export default Header;
