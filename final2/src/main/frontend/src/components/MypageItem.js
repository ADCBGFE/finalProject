import React from 'react'

import styles from "./MypageItem.module.css"

const MypageItem = ({bookId, bookName, mbId, rtEndTime, rtWh}) => {

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("/book/return", {
      method: "POST",
      body: JSON.stringify({
        bookId: bookId
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.clone().json());
        if (res.ok) {
          alert("반납 완료")
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "반납 오류";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert(data);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.list}>
          <form action='submit' onSubmit={submitHandler}>
            <button className='btn'>반납</button>
          </form>
          <h5 className={styles.name}>{bookName}</h5>
          <h5 className={styles.start}>{mbId}</h5>
          <h5 className={styles.end}>{rtEndTime}</h5>
          <h5>{rtWh}</h5>
        </div>
      </div>
    </div>
  )
}

export default MypageItem