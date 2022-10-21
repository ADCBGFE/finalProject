import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../context/auth-context';

import './CommentsForm.css';
import { useProductsContext } from "../../context/products_context";
import CommentContext from '../../context/comment-context';

const CommentsForm = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const commentCtx = useContext(CommentContext);
  // console.log(commentList);

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  // const {products} = useProductsContext();

  // const findBookId = products.find((item) => {
  //   return item.bookId === id;
  // })

  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const index = (Math.random() * 10).toFixed(1);
  let date = new Date();
  let sec = date.getMilliseconds();

  const submitHandler = (event) => {
    event.preventDefault();

    // const commentData = {
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enteredDate),
    // };

    if (!isLoggedIn) {
      return
    }
    const content = enteredTitle;
    if (content.length < 1) {
      return
    }
    const bookId = props.findBookId;

    console.log(content, bookId)

    fetch("/comment/comment", {
      method: "POST",
      body: JSON.stringify({
        content: content,
        bookId: bookId,
        rgTime: sec,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.clone().json());
        setIsLoading(false);
        if (res.ok) {
          alert("댓글이 작성되었습니다.")
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "댓글 오류";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // alert(data);
        window.location.reload();
        console.log(data)
        // history("/");

        // if (enteredEmail === "test@test.com" && enteredPw === "123456") {
        //   authCtx.isAdmin("messi");
        //   history("/")
        // }
      })
      .catch((err) => {
        alert(err.message);
      });

    // props.onSavecommentData(commentData);
    // setEnteredTitle('');
    // setEnteredAmount('');
    // setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="review-container">
        <div className="writing-zone">
          {/* <label>Comment</label> */}
          <textarea class="writing-box" cols="" rows="2" placeholder="✍🏻 한줄평을 작성해주세요." value={enteredTitle} onChange={titleChangeHandler} maxLength="100"></textarea>
          <button type="submit" className="comment-btn">등록</button>
          {/* <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          /> */}
        </div>
        {/* <div className='new-comment__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-comment__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div> */}
      </div>
      <div className='new-comment__actions'>
        {/* <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit' onClick={props.plusIndexHandler}>Add Comment</button> */}
        
      </div>
    </form>
  );
};

export default CommentsForm;
