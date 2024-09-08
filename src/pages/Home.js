import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <Banner />
        <Categories />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
