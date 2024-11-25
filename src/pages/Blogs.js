import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

function Blogs() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 overflow-auto">
        <Posts />
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
