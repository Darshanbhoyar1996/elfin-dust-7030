import React from 'react'
import Cards from './Cards'
import DisplayCard from './DisplayCard'
import Footer from './Footer'
import Navbar from './Navbar'
import Plans from './Plans'
import ProgressTracker from './ProgressTracker'
import SmartWatch from './SmartWatch'
import Workoutneed from './Workoutneed'

const Home = () => {
  return (
    <div><Navbar/>
    <DisplayCard/>
    <Workoutneed/>
    <SmartWatch/>
    <ProgressTracker/>
    <Cards/>
    <br />
    <Plans/>
    <br />
    <Footer/></div>
  )
}

export default Home