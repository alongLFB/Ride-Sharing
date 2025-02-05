import React from "react";
import Header from "./pages/Header";
import Content from "./pages/Content";
import Footer from "./pages/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      {/* 让 Content 占据剩余空间 */}
      <div className="flex-grow">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
