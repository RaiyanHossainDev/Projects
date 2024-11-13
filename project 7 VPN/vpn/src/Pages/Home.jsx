import React from 'react'
import Banner from '../Components/Banner/Banner'
import Counter from '../Components/Counter/Counter'
import Feature from '../Components/Feature/Feature'
import Plan from '../Components/Plan/Plan'
import Map from '../Components/Map/Map'
import Image from '../Components/Image/Image'
import Myslider from '../Components/MySlider/Myslider'
import Subscribe from '../Components/Subscribe/Subscribe'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Counter/>
        <Feature/>
        <Plan/>
        <Map/>
        <Image/>
        <Myslider/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home