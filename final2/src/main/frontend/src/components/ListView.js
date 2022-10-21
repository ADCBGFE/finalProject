import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = (props) => {
  return (
    <Wrapper>
      {props.products.map((product) => {
        const { bookId, bookImgUrl, bookName, price, bookCt } = product;
        return (
          <article key={bookId}>
            <Link to={`/products/${bookId}`}>
              <img src={bookImgUrl}></img>
            </Link>
            <div>
              <Link to={`/products/${bookId}`}>
                <h4>{bookName}</h4>
              </Link>
              <h5 className="price">{price/100 > 1000 ? "대여불가능" : "대여가능"}</h5>
              <p>{bookCt.substring(0, 150)}...</p>
              <Link to={`/products/${bookId}`} className="btn">
                show details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  a {
    color: black;
  }
  a h4 {
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
