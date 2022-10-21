import React, {useState} from 'react'

import CommentsForm from './CommentsForm';

import './Comments.css';

const Comments = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const savecommentDataHandler = (enteredcommentData) => {
    const commentData = {
      ...enteredcommentData,
      id: Math.random().toString(),
    };
    props.onAddcomment(commentData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  
  console.log(props.findBookId)

  return (
    <div>
      {/* {!isEditing && (
        <button onClick={startEditingHandler}>리뷰 남기기</button>
      )} */}
      
        <CommentsForm
          findBookId={props.findBookId}
          onSavecommentData={savecommentDataHandler}
          onCancel={stopEditingHandler}
        />
    </div>
  );
}

export default Comments