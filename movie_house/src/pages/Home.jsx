import React from 'react'
import Navbar from '../components/Navbar'
import { Movies } from './Movies'
import Banner from './Banner';



export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Movies/>
    </div>
  )
}
