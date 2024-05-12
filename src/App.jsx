import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Landing from "./pages/landing/landing";
import Profile from "./pages/profile/profile";
import Buy from "./pages/buy/buy";
import Update from "./pages/update/update";
import Order from "./pages/order/order";
import Cart from "./pages/cart/cart";
import AddProduct from "./pages/addProduct/AddProduct";
import Admin from "./pages/admin/admin";
import Show_Order from "./pages/show_order/show_order";
import Show_Product from "./pages/show_product/show_product";
function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={<Landing products={products} setProducts={setProducts} />}
          />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/update" element={<Update />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/show_order" element={<Show_Order/>} />
          <Route path="/show_product" element={<Show_Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
