import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

import Logo1 from "../assets/barcelona.png"

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'mypage',
    url: '/about',
  },
  {
    id: 3,
    text: 'book',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: `${require("../assets/book-ico.png")}`,
    title: 'read',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: `${require("../assets/book-ico.png")}`,
    title: 'rent',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: `${require("../assets/book-ico.png")}`,
    title: 'new',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = '/book/list'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const single_product_url = `/book/book?bookId=`
