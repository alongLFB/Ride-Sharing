"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Card className="mb-8">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">拼车信息共享平台</CardTitle>
                    <p className="text-lg text-gray-600 mt-2">安全、便捷、高效的出行解决方案</p>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-6">
                        无论您是需要搭车还是愿意载客，我们都能帮您找到合适的出行伙伴
                    </p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            {/* <Car className="h-6 w-6" /> */}
                            发布出行信息
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-gray-600">
                            作为司机发布您的行程信息，或作为乘客发布您的用车需求
                        </p>
                        <Link to="/RideShare">
                            <Button className="w-full">
                                立即发布
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            {/* <Search className="h-6 w-6" /> */}
                            查看出行信息
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-gray-600">
                            浏览最新发布的行程信息，寻找合适的出行机会
                        </p>
                        <Link to="/TravelInfo">
                            <Button className="w-full">
                                开始查看
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        {/* <Users className="h-6 w-6" /> */}
                        平台优势
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                            <h3 className="font-semibold mb-2">便捷发布</h3>
                            <p className="text-gray-600">简单几步即可发布您的出行信息</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">实时匹配</h3>
                            <p className="text-gray-600">快速找到合适的出行伙伴</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">安全可靠</h3>
                            <p className="text-gray-600">提供微信和手机号双重联系方式</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Home;