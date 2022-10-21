import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import AuthContext from "../../context/auth-context";

import "./Nav_test.css";

const Nav_test = () => {
  const authCtx = useContext(AuthContext);
  const { total_items, clearCart } = useCartContext();

  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    clearCart();
  };
  const id = authCtx.mbId;

  const { openSidebar } = useProductsContext();

  const admin = authCtx.admin;

  const { closeSidebar } = useProductsContext();


  return (
    <div className="nav-messi">
      <div className="nav-header">
        <h1>
          <Link to="/">RENTAL</Link>
        </h1>
        <div className="nav-nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/products">BOOKS</Link>
            </li>
            <li>
              <div>
                {(!admin && isLoggedIn) && (
                  <li>
                    <Link to={`/about/${id}`}>MyPage</Link>
                  </li>
                )}
                {(admin && isLoggedIn) && (
                  <li>
                    <Link to="/admin">AdminPage</Link>
                  </li>
                )}
              </div>
            </li>
            <li>
              {isLoggedIn && <Link to="/cart" className="cart-container">
                <FaShoppingCart></FaShoppingCart>
                <span className="cart-value">{total_items}</span>
              </Link>}
            </li>
            {/* <li><Link to="/auth">LOGIN</Link></li> */}
            {!isLoggedIn && (
              <Link to="/auth" className="auth-btn">
                Login <FaUserPlus></FaUserPlus>
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/auth" className="auth-btn" onClick={logoutHandler}>
                Logout <FaUserMinus></FaUserMinus>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav_test;
