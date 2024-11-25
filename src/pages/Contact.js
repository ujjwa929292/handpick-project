import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default Contact