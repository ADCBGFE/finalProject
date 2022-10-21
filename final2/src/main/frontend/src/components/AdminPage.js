import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

import MypageTop from "./Admin/MypageTop";
import MypageSide from "./Admin/MypageSide";
import Chart from "./Admin/Chart";
import "./AdminPage.css";
import { FaUsers } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { HiDocumentDuplicate } from "react-icons/hi";

const AdminPage = () => {

  const authCtx = useContext(AuthContext);

  const [rentalBookList, setRentalBookList] = useState([]);

  const url = "/book/rentalList";
  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const products = response.data;
      console.log(products);
      setRentalBookList(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const history = useNavigate()

  if (!authCtx.isLoggedIn) {
    return history("/");
  }


  return (
    <div className="admin-page">
      {/* <h1 classNameName='admin'>Admin Page</h1>
      <MypageTop></MypageTop>
      <MypageSide></MypageSide>
      <Chart></Chart> */}
      <h3 className="i-name">Dashboard</h3>

      <div className="all">
        <div className="values">
          <div className="val-box">
            <i className="fas fa-users a">
              <FaUsers></FaUsers>
            </i>
            <div>
              <h3>2,623</h3>
              <span>New Users</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="val-box">
            <i className="fas fa-book-open b">
              <BsBookFill></BsBookFill>
            </i>
            <div>
              <h3>283</h3>
              <span>New Rental</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="val-box">
            <i className="fas fa-layer-group c">
              <ImBooks></ImBooks>
            </i>
            <div>
              <h3>1,934</h3>
              <span>Total Rented</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="val-box">
            <i className="fas fa-book d">
              <HiDocumentDuplicate></HiDocumentDuplicate>
            </i>
            <div>
              <h3>100</h3>
              <span>Books</span>
            </div>
          </div>
        </div>
      </div>

      <div className="board">
        <table width="100%">
          <thead>
            <tr>
              <td>도서명</td>
              <td>저자</td>
              <td>대여일</td>
              <td>대여자</td>
              <td>반납일</td>
              <td>대여여부</td>
            </tr>
          </thead>
          <tbody>
            {rentalBookList.map((item) => {
              return (
                <tr>
                  <td>
                    <h5>{item.bookName}</h5>
                  </td>
                  <td>
                    <h5>dummy</h5>
                  </td>
                  <td>
                    <h5>{item.rtEndTime}</h5>
                  </td>
                  <td>
                    <h5>{item.mbId}</h5>
                  </td>
                  <td>
                    <h5>dummy</h5>
                  </td>
                  <td>
                    <h5>{item.rtWh}</h5>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
