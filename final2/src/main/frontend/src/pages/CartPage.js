import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {

  const {cart} = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>카트가 비어있습니다!</h2>
          <Link to="/products" className='btn'>
            제품 둘러보기
          </Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <main>
      <Wrapper className='page'>
        <CartContent></CartContent>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
