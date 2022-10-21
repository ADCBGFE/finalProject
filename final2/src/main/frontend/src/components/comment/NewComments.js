import React from 'react'

import CommentsList from './CommentsList'

const NewComments = (props) => {
  return (
    <CommentsList comment={props.comment} findBookId={props.findBookId} items={props.items} />
  )
}

export default NewComments