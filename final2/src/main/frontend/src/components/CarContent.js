import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useMediaQuery } from "react-responsive";
import RentalContext from "../context/rental-context";
import AuthContext from "../context/auth-context";
import Loading from "./Loading";

const CartContent = () => {
  const history = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const mbId = authCtx.mbId;

  const { cart, clearCart } = useCartContext();

  const rentalCtx = useContext(RentalContext);

  console.log(rentalCtx.cartBookId[0])
  console.log(rentalCtx.cartBookName[0])

  let date = new Date();
  let sec = date.getMilliseconds();

  const submitHandler = (event) => {
    event.preventDefault();

    if (isLoading) {
      return <Loading></Loading>;
    }

    // rentalCtx.rental(rentalCtx.cartBookId, mbId)

    fetch("/book/rental", {
      method: "POST",
      body: JSON.stringify({
        bookId: rentalCtx.cartBookId[0],
        bookName: rentalCtx.cartBookName[0],
        mbId: mbId,
        regTime: sec,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.clone().json());
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "장바구니 오류";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // alert(data);
        history("/");
      })
      .catch((err) => {
        alert(err.message);
      });
      clearCart();
      rentalCtx.clearBookId();
      rentalCtx.clearBookName();
  };

  const isPhone = useMediaQuery({ query: "(max-width: 1024px)" });
  const isPc = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <Wrapper className="section section-center">
      {/* <CartColumns /> */}
      {isPc &&
        cart.map((item) => {
          return <CartColumns key={item.id} {...item} />;
        })}
      {isPhone && (
        <div className="content">
          <div className="cart-title">
            <h5>#</h5>
            <h5>title</h5>
            <h5>price</h5>
            <h5>amount</h5>
            <h5>totalPrice</h5>
            <h5>#</h5>
            <hr></hr>
          </div>
        </div>
      )}
      {isPhone &&
        cart.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          상품 계속 둘러보기
        </Link>
        <button type="button" className="link-btn clear-btn" onClick={clearCart}>
          카트 초기화
        </button>
        <form action="submit" onSubmit={submitHandler}>
          <button className="btn">대여하기</button>
        </form>
      </div>
      {/* <CartTotals /> */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .cart-background {
    text-align: center;
    margin-bottom: 4rem;
  }
  .cart-title {
    display: grid;
    grid-template-columns: 120px 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 1rem;
    h5 {
      color: var(--clr-grey-5);
      font-weight: 400;
    }
  }
  hr {
    color: black;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;
export default CartContent;
