import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import AuthContext from '../context/auth-context'

const Nav = () => {

  const {openSidebar} = useProductsContext();

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const {admin} = authCtx

  const {id} = useParams();
  console.log(id)

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h1>book <span>rental</span></h1>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {(isLoggedIn && !admin) && <li>
            <Link to={`/about/${id}`}>MyPage</Link>
          </li>}
          {(isLoggedIn && admin) && <li>
            <Link to="/admin">AdminPage</Link>
          </li>}
          <li>
            <Link to="/products">Books</Link>
          </li>
        </ul>
        <CartButtons></CartButtons>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-header h1 {
    font-size: 2.5rem;
    color: black;
  }
  .nav-header span {
    color: orange;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-header h1 {
      font-size: 3rem;
      color: black;
    }
    .nav-header span {
      color: orange;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.3em;
        font-weight: 700;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 5px solid orange;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
