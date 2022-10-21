import React, { Fragment, useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";
import axios from "axios"

import styles from "./Mypage.module.css";
import { BsBarChartFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import dummyList from "../dummyList";
import Expenses from "./Chart/Expenses";
import MypageItem from "./MypageItem";

const dummyData = [
  { id: 0, value: { title: "자바의 정석", start: "2022.06", end: "2022.09", state: "반납" } },
  { id: 1, value: { title: "이펙티브 자바", start: "2022.06", end: "2022.09", state: "반납" } },
  { id: 2, value: { title: "DoIt 오라클", start: "2022.06", end: "2022.09", state: "미반납" } },
  { id: 3, value: { title: "객체지향의 사실과 오해", start: "2022.06", end: "2022.09", state: "반납" } },
  { id: 4, value: { title: "모던 자바 인 액션", start: "2022.06", end: "2022.09", state: "미반납" } },
];

const Mypage = () => {

  const index = Math.random();

  const authCtx = useContext(AuthContext);
  const name = authCtx.mbId
  console.log(name)

  const [show, setShow] = useState("미반납");
  const [isCheckingBox, setIsCheckingBox] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);
  const [rentalBookList, setRentalBookList] = useState([]);

  const url = "/book/rentalList"
  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      console.log(products)
      setRentalBookList(products);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProducts(url)
  }, [])

  const history = useNavigate();

  if (!authCtx.isLoggedIn) {
    return history("/");
  }

  const newList = rentalBookList.filter((item) => (
    item.mbId === name
  ))
  console.log(newList)

  return (
    <div className={styles.header}>
      {/* <div className={styles.state}>
        <h1>책 대여 현황</h1>
        <Expenses></Expenses>
      </div> */}
      <div className={styles["hello-box"]}>
        <h2>{name}님의 마이페이지입니다.</h2>
      </div>
      <div className={styles.col}>
        <div className={styles.content}>
          <h5>#</h5>
          <h5>제목</h5>
          <h5>회원ID</h5>
          <h5>대여일</h5>
          <h5>반납일</h5>
          <h5>대여상태</h5>
          <span></span>
        </div>
        <hr />
        {newList && newList.map((item) => {
          return <MypageItem {...item} show={show}></MypageItem>
        })}
        {/* {newList && <MypageItem books={newList}></MypageItem>} */}
      </div>
      <div className={styles["btn-container"]}>
        <button className={styles.btn}>대여 연장</button>
        <button className={styles.btn}>반납 신청</button>
        {/* <button className={styles.btn} onClick={fetchProducts}>대여 목록</button> */}
      </div>
    </div>
  );
};

export default Mypage;
