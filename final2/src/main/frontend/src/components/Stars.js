import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = (props) => {

  const {stars, reviews} = props;

  return (
    <Wrapper>
      <div className='stars'>
        <span>
          {stars >= 10 ? <BsStarFill></BsStarFill> : stars >= 5 ? <BsStarHalf></BsStarHalf> : <BsStar></BsStar>}
        </span>
        <span>
          {stars >= 20 ? <BsStarFill></BsStarFill> : stars >= 30 ? <BsStarHalf></BsStarHalf> : <BsStar></BsStar>}
        </span>
        <span>
          {stars >= 40 ? <BsStarFill></BsStarFill> : stars >= 50 ? <BsStarHalf></BsStarHalf> : <BsStar></BsStar>}
        </span>
        <span>
          {stars >= 60 ? <BsStarFill></BsStarFill> : stars >= 70 ? <BsStarHalf></BsStarHalf> : <BsStar></BsStar>}
        </span>
        <span>
          {stars >= 80 ? <BsStarFill></BsStarFill> : stars >= 79.5 ? <BsStarHalf></BsStarHalf> : <BsStar></BsStar>}
        </span>
      </div>
      <p className='reviews'>
        ({reviews} 명이 평가하였습니다)
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
