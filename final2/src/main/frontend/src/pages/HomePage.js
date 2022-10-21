import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import Service_test from '../components/Service/Service_test'
import Hero_test from '../components/Hero_test/Hero_test'

const HomePage = () => {
  return (
    <main>
      <Hero_test></Hero_test>
      <FeaturedProducts></FeaturedProducts>
      <Service_test></Service_test>
      <Contact></Contact>
    </main>
  )
}

export default HomePage
