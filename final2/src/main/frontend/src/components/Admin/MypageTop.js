import React, {useState} from "react";

import styles from "./MypageTop.module.css";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"
import {FaUserAlt} from "react-icons/fa"
import {SiBookstack} from "react-icons/si"
import {BsCartPlusFill} from "react-icons/bs"

const MypageTop = () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>USERS</div>
          <div className={styles.count}>125명</div>
          <div className={styles.link}>See all user</div>
        </div>
        <div className={styles.right}>
          <div className={styles.percent}>
            <IoIosArrowUp></IoIosArrowUp> 20%
          </div>
          <FaUserAlt className={styles.icon}></FaUserAlt>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>BOOKS</div>
          <div className={styles.count}>2076권</div>
          <div className={styles.link}>See all books</div>
        </div>
        <div className={styles.right}>
          <div className={styles.percent}>
            <IoIosArrowUp></IoIosArrowUp> 52%
          </div>
          <SiBookstack className={styles.icon}></SiBookstack>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>SALES</div>
          <div className={styles.count}>0.86억</div>
          <div className={styles.link}>See all sales</div>
        </div>
        <div className={styles.right}>
          <div className={styles.percent}>
            <IoIosArrowUp></IoIosArrowUp> 47%
          </div>
          <BsCartPlusFill className={styles.icon}></BsCartPlusFill>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>DUMMY</div>
          <div className={styles.count}>100</div>
          <div className={styles.link}>See all dummy</div>
        </div>
        <div className={styles.right}>
          <div className={styles.percentDown}>
            <IoIosArrowDown></IoIosArrowDown> 12%
          </div>
          <FaUserAlt className={styles.icon}></FaUserAlt>
        </div>
      </div>
    </div>
  );
};

export default MypageTop;
