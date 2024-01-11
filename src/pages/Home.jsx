import React from 'react'
import { Hero, About, Services } from '../components'


const Home = () => {
  return (
    <div className="z-0 relative">
                <div>
                  <Hero />
                </div>
                <div>
                  <About />
                </div>
                <div  id="services" className="bg-flashwhite w-screen">
                  <Services />
                </div>
              </div>
  )
}

export default Home