"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RideShare from "@/app/pages/RouteShare";
import TravelInfo from "@/app/pages/TravelInfo";
import Home from "./Home";

const Content = () => {
    return (
        <Router>
            <div className="flex flex-col items-center space-y-4 p-6">
                <nav className="space-x-4">
                    <Link to="/">
                        <Button className="text-base w-1/5">首页</Button>
                    </Link>
                    <Link to="/TravelInfo">
                        <Button className="text-base w-1/3">查看出行信息</Button>
                    </Link>
                    <Link to="/RideShare">
                        <Button className="text-base w-1/3">发布出行信息</Button>
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/TravelInfo" element={<TravelInfo />} />
                    <Route path="/RideShare" element={<RideShare />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Content;
