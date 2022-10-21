import React, {useState, useContext, useEffect} from "react";
import axios from "axios"

import CommentItem from "./CommentItem";
import "./CommentsList.css";
import CommentContext from "../../context/comment-context";

const CommentsList = (props) => {

  const commentCtx = useContext(CommentContext);
  const {id2} = props.findBookId

  // if (props.items.length === 0) {
  //   return <h2 className="comments-list__fallback">...</h2>;
  // }


  // const url = "/web/comment/list"
  // const fetchComment = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     const commentList = response.data;
  //     console.log(commentList)
  //     setComment(commentList);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  commentCtx.fetchComment();
  const comment = commentCtx.comment

  const commentId = comment.filter((item) => (
    item.bookId === props.findBookId
  ))
  console.log(commentId)

  return (
    <div className="comment-container">
      <ul className="comments-list">
        {console.log(comment)}
        {/* {comment.map((comment) => (
          <CommentItem
            key={comment.bookId}
            title={comment.content}
            findBookId={props.findBookId}
            // amount={comment.amount}
            // date={comment.date}
          />
        ))} */}
        {commentId && commentId.map((item) => {
          return <CommentItem {...item}></CommentItem>
        })}
      </ul>
    </div>
  );
};

export default CommentsList;
