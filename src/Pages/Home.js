import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Team from '../components/Team'
import Mission from '../components/Mission'
import Footer from '../components/Footer'
// import Testimonial from '../components/Testimonial'
import Section from '../components/Section'
import MajorCauses from '../components/MajorCauses'
export default function Home() {
  return (
    <div>
      
      <Header />
      <Hero />
      <MajorCauses />

      <Team />
      <Mission />
      {/* <Testimonial /> */}
      <Section />
      {/* <CountingNumbers /> */}
      <Footer />
    </div>
  )
}
