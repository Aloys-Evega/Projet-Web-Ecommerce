import React from 'react'
import { Hero } from './Hero'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Hero2 } from './Hero2'

export const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Footer/>
    </div>
  )
}
