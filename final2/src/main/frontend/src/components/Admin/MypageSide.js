import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar"

import styles from "./MypageSide.module.css"
import "react-circular-progressbar/dist/styles.css"

const MypageSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <div className={styles.top}>
          <h1 className={styles.title}>Total amount</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.sidechart}>
            <CircularProgressbar value={60} text={"60%"} strokeWidth={3}></CircularProgressbar>
          </div>
          <p className={styles.chartTitle}>하루 접속자 비율</p>
          <p className={styles.amount}>86명</p>
        </div>
      </div>
    </div>
  )
}

export default MypageSide