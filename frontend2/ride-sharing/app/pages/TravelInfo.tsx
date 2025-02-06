"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign, Phone, MessageCircle } from "lucide-react";

interface Ride {
    _id: string;
    type: string;
    date: string;
    timeRange: string;
    departure: string;
    destination: string;
    seats: number;
    price: number;
    wechat: string;
    telephone: string;
}

const TravelInfo = () => {
    const [rides, setRides] = useState<Ride[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchRides();
    }, []);

    const fetchRides = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/rideshare');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRides(data);
        } catch (error) {
            setError('Failed to fetch ride information');
            console.error('Error fetching rides:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen">
                <div className="bg-blue-600 text-white p-4 text-center text-xl mb-4">
                    出行信息
                </div>
                <div className="text-center p-8">
                    加载中...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen">
                <div className="bg-blue-600 text-white p-4 text-center text-xl mb-4">
                    出行信息
                </div>
                <div className="text-center text-red-500 p-8">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="bg-blue-600 text-white p-4 text-center text-xl mb-4">
                出行信息
            </div>

            <div className="container mx-auto px-4">
                {rides.length === 0 ? (
                    <div className="text-center p-8">
                        暂无出行信息
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {rides.map((ride) => (
                            <Card key={ride._id} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            类型: {ride.type === 'driver' ? '车找人' : '人找车'}
                                        </span>
                                        {/* <span className="text-gray-500 text-sm">
                                            联系方式: {ride.contact}
                                        </span> */}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-gray-500" />
                                            <span>{formatDate(ride.date)} {ride.timeRange}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-gray-500" />
                                            <span>{ride.departure} → {ride.destination}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5 text-gray-500" />
                                            <span>{ride.type === 'driver' ? '空余座位: ' : '所需座位: '}{ride.seats}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-5 h-5 text-gray-500" />
                                            <span>{ride.price} AED</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="w-5 h-5 text-gray-500" />
                                            <span>{ride.wechat}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Phone className="w-5 h-5 text-gray-500" />
                                            <span>{ride.telephone}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TravelInfo;