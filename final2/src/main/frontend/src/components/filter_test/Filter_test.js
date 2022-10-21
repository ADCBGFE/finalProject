import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {BsCartPlusFill} from "react-icons/bs"
import {FiLogIn} from "react-icons/fi"
import {AiTwotoneSetting} from "react-icons/ai"
import {SiBookstack} from "react-icons/si"
import {FaUserAlt} from "react-icons/fa"
import { useFilterContext } from "../../context/filter_context";

import styles from "./Filter_test.module.css";

const Filter_test = () => {

  const {filtered_products, grid_view, setGridView, setListView} = useFilterContext();

  return (
    <div className={styles.nav}>
      <ul className={styles.navlist}>
        <li>
          <button type="button" className={styles["nav-toggle"]}>
            <span className={styles.text1}>Filter</span>
          </button>
        </li>
        <li>
          <button to="/cart" className={styles["nav-toggle"]}>
            <span className={styles.text}>카테고리</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]} onClick={setGridView}>
            <span className={styles.text}>정렬(grid)</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]} onClick={setListView}>
            <span className={styles.text}>정렬(list)</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]}>
            <span className={styles.text}>이름순 ㄱ-ㅎ</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]}>
            <span className={styles.text}>이름순 ㅎ-ㄱ</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter_test;
