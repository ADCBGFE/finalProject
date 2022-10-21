import React, { Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/dejong.png";
import dummyPlayer from "../utils/dummyPlayer";
import styles from "./About.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Mypage from "../components/Mypage";
import Expenses from "../components/Chart/Expenses";
import AdminPage from "../components/AdminPage";
import AuthContext from "../context/auth-context";

const AboutPage = () => {

  const authCtx = useContext(AuthContext);
  const {admin} = authCtx

  const {id} = useParams();
  console.log(id)

  return (
    
    <Fragment>
      {!admin && <Mypage></Mypage>}
      {admin && <AdminPage></AdminPage>}
      {/* <AdminPage></AdminPage> */}
    </Fragment>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 700px;
    object-fit: cover;
  }
  .text {
    margin-top: 5rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .list {
    display: flex;
  }
  .detail img {
    height: 20rem;
    width: 20rem;
    object-fit: contain;
  }
  .messi {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
