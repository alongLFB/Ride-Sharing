"use client";
import React from "react";
import Home from "./Home/components/Home";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
};

export default HomePage;