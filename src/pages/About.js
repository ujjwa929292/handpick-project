import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function About() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default About