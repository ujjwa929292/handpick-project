import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

function Category() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
      <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default Category