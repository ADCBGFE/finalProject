import React, { Fragment, useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import Auth from "./components/Auth";
import { Home, Products, SingleProduct, About, Cart, Error, Checkout, PrivateRoute } from "./pages";
import AdminPage from "./components/AdminPage";
import Auth_Test from "./components/Auth_Test";
import Auth_test from "./components/Auth_test/Auth_test";
import Nav_test from "./components/Nav_test/Nav_test";

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Nav_test></Nav_test>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about/:id" element={<About></About>}></Route>
          <Route path="admin" element={<AdminPage></AdminPage>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="products/:id" element={<SingleProduct></SingleProduct>}></Route>
          <Route path="checkout" element={<Checkout></Checkout>}></Route>
          <Route path="auth" element={<Auth_test></Auth_test>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
