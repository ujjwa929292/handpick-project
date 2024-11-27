import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from '../components/Products'

function Product() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default Product