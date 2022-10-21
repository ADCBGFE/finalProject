import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/books-main.jpg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <div className="img-container">
          <img src={heroBcg} className="main-img"></img>
        </div>
        <div className="textCon">
          <h1>
            Book <br></br>
            rental Service
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s,
          </p>
          <Link to="/products" className="btn hero-btn">
            제품 보러가기
          </Link>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .content {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .img-container {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: relative;
    z-index: -1;
    display: none;
    margin-left: -15rem;
  }
  .main-img {
    filter: blur(5px);
  }

  .textCon {
    z-index: 999;
    position: absolute;
    top: 25%;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: rgb(255, 255, 3);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #fff;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1.5rem;
    }
    .img-container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      transform: scale(1.4);
    }
    /* .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    } */
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      /* background: var(--clr-primary-9); */
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
