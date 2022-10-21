import React, {useContext} from "react";
import styled from "styled-components";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import RentalContext from "../context/rental-context";

const CartColumns = (props) => {
  const { id, image, name, auth, amount, pu } = props;

  const { removeItem, toggleAmount } = useCartContext();

  const rentalCtx = useContext(RentalContext);
  rentalCtx.returnBookId(id);
  rentalCtx.returnBookName(name);

  const removeHandler = () => {
    removeItem(id);
  };

  const increase = () => {
    toggleAmount(id, "increase");
  };
  const decrease = () => {
    toggleAmount(id, "decrease");
  };

  return (
    <Wrapper>
      <div className="content">
        <table class="cart-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book ID</th>
              <th></th>
              <th>Title</th>
              <th>author</th>
              <th>Amount</th>
              <th>TotalAmount</th>
            </tr>
          </thead>
          <tbody>
            {/* {props.cart.map((item) => {
              return (
                <tr>
                  <td>
                    <button type="button" className="remove-btn" onClick={removeHandler}>
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} width="50px" />
                  </td>
                  <td>{item.name}</td>
                  <td>기시미 이치로</td>
                  <td>
                    <AmountButtons amount={item.amount} increase={increase} decrease={decrease}></AmountButtons>
                  </td>
                  <td>{item.amount}</td>
                </tr>
              );
            })} */}
            <tr>
              <td>
                <button type="button" className="remove-btn" onClick={removeHandler}>
                  <FaTrash></FaTrash>
                </button>
              </td>
              <td>{id}</td>
              <td>
                <img src={image} width="50px" />
              </td>
              <td>{name}</td>
              <td>{auth}</td>
              <td>
                {pu}
              </td>
              <td>{amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  .remove-btn {
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
  }
  @media (min-width: 776px) {
    display: block;
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

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
    .cart-table {
      width: 90%;
      margin: auto;
      text-align: center;
      background: white;
      border-radius: 10px;
    }

    .cart-table th,
    .cart-table td {
      padding: 15px;
      border-bottom: 1px solid black;
      border-collapse: collapse;
    }

    .cart-table th:nth-child(4) {
      width: 350px;
    }
  }
`;

export default CartColumns;
