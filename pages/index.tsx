import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero'
import BestSellers from './components/Navbar/BestSellers'

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <BestSellers/>
    </div>
  )
}

export default index
index