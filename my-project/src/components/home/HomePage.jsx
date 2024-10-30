import React from 'react'
import { Hero } from './Hero'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}
