import React from 'react'
import { Hero } from './Hero'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Hero2 } from './Hero2'
import { Hero3 } from './Hero3'


export const HomePage = () => {
  return (
    <div className='px-8'>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Footer/>
    </div>
  )
}
