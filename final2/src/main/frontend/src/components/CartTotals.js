import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {

  const {total_items, shipping_fee} = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>총 수량: <span>{total_items}</span></h5>
          <p>대여비: <span>{shipping_fee}원</span></p>
          <hr></hr>
          <h4>결제 금액: <span>{total_items * shipping_fee}원</span></h4>
        </article>
        <Link to="/checkout" className='btn'>
          상품 결제
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
