import React, {useState, useContext, useEffect} from "react";
import axios from "axios"

const CommentContext = React.createContext({
  bookId: "",
  content: "",
  fetchComment: () => {},
  comment: [],
});

export const CommentContextProvider = (props) => {

  const [comment, setComment] = useState([]);

  const url = "/comment/list"
  const fetchComment = async (url) => {
    try {
      const response = await axios.get(url);
      const commentList = response.data;
      console.log(commentList)
      setComment(commentList);
    } catch (error) {
      console.log(error)
    }
  }
  console.log(comment)

  const contextValue = {
    // content: comment[0].content,
    fetchComment: fetchComment,
    comment: comment,
  }

  useEffect(() => {
    fetchComment(url)
  }, [])

  return (
    <CommentContext.Provider value={contextValue}>
      {props.children}
    </CommentContext.Provider>
  )
}

export default CommentContext;

