import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/Auth/SignUp";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Orders/Order";
import Payment from "./Pages/Payment/Payment";
import Productdetail from "./Pages/Productdetail/Productdetail";
import Results from "./Pages/Results/Results";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productsID" element={<Productdetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
