"use client";

import React from "react";
import Header from "./pages/Header";
// import Content from "./pages/Content";
import Footer from "./pages/Footer";

import dynamic from "next/dynamic";

const Content = dynamic(() => import("./pages/Content"), { ssr: false });

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-grow">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

