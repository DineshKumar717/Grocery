import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navber";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/Seller/SellerLogin";
import SellerLayout from "./pages/Seller/SellerLayout";
import AddProduct from "./pages/Seller/AddProduct";
import ProductList from "./pages/Seller/ProductList";
import Orders from "./pages/Seller/Orders";
import Loading from "./components/Loading";

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("/seller");
  const { showUserLogin, isSeller } = useAppContext();

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-adderss" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />
          <Route path="/seller" element={isSeller ? <SellerLayout/> :<SellerLogin />}>
             <Route index element={isSeller ? <AddProduct/>: null}/>
             <Route path="product-list" element={<ProductList/>}/>
             <Route path="orders" element={<Orders/>}/>
           
          </Route>
        </Routes>

        {!isSellerPath && <Footer />}
      </div>
    </div>
  );
};

export default App;
