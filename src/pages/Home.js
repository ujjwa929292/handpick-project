import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <Banner />
        <Categories />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
