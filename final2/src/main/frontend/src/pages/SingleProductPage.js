import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import AuthContext from "../context/auth-context";
import { formatPrice } from "../utils/helpers";
import axios from "axios"
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Comments from "../components/comment/Comments";
import NewComments from "../components/comment/NewComments";

import Img from "../assets/book1.jpg";

const SingleProductPage = () => {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const [comments, setcomments] = useState([]);
  
  const [index, setIndex] = useState(0);
  const plusIndexHandler = () => {
    setIndex(index + 1);
  }

  const addcommentHandler = (comment) => {
    setcomments((prevcomments) => {
      return [comment, ...prevcomments];
    });
  };

  const { id } = useParams();

  console.log(id)
  
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    products
  } = useProductsContext();

  const findId = products.find((item) => {
    return item.bookId === id;
  })
  console.log(findId)

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 3000);
  //   }
  //   // eslint-disable-next-line
  // }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    bookName,
    bookCt,
    stock,
    stars,
    bookAt,
    bookRvNb,
    id: bookId,
    bookCatg,
    bookImgUrl,
    bookPubl
  } = product;
  console.log(product)
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          제품으로 돌아가기
        </Link>
        <div className="product-center">
          <img src={bookImgUrl}></img>
          <section className="content">
            <h2>{bookName}</h2>
            {console.log(bookName)}
            <Stars stars={bookRvNb} reviews={bookRvNb} />
            <p className="desc">{bookCt}</p>
            <p className='info'>
              <span>저자 :</span>
              {bookAt}
            </p>
            <p className="info">
              <span>카테고리 :</span>
              {bookCatg}
            </p>
            <p className="info">
              <span>출판사 :</span>
              {bookPubl}
            </p>
            <hr />
            {isLoggedIn && <AddToCart product={product} />}
          </section>
        </div>
      </div>
      <Comments findBookId={id} onAddcomment={addcommentHandler} plusIndexHandler={plusIndexHandler} index={index}></Comments>
      <div className="newComment">
        <NewComments findBookId={id} items={comments} index={index}></NewComments>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .product-center img {
    margin-left: 8rem;
    width: 17rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      width: 300px;
      font-weight: 700;
    }
  }

  .newComment {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
