import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="relative h-screen overflow-auto">
      <Header />
      <Banner />
    </div>
  );
}

export default Home;
