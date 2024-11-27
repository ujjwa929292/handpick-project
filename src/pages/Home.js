import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Services from "../components/Services";
import Testimonial from "../components/Testimonal";
import BannerSecond from "../components/BannerSecond";
import BannerThird from "../components/BannerThird";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <Banner />
        <Services />
        <BannerSecond />
        <Testimonial />
        <BannerThird />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
