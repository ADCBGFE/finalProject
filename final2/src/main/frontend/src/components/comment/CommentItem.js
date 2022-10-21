import React, {useState, useContext} from 'react';
import CommentContext from '../../context/comment-context';

import './CommentItem.css';

const CommentItem = ({content}) => {

  const commentCtx = useContext(CommentContext);
  const [show, setShow] = useState(false);


  return (
    <li className='comment-li'>
      <div className="review-box">
            <div className="comment">
                {content}
            </div>
        </div>
    </li>
  );
};

export default CommentItem;
