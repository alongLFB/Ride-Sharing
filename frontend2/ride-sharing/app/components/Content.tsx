"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Content = () => {
    const pathname = usePathname();
    const [clientPathname, setClientPathname] = useState("");

    useEffect(() => {
        setClientPathname(pathname);
    }, [pathname]);

    return (
        <div className="flex flex-col">
            <nav className="sticky top-0 bg-white z-50 p-4 shadow-md">
                <div className="flex justify-center space-x-4">
                    <Button variant={clientPathname === '/Home' ? 'default' : 'outline'} asChild>
                        <Link href="/Home">首页</Link>
                    </Button>
                    <Button variant={clientPathname === '/TravelInfo' ? 'default' : 'outline'} asChild>
                        <Link href="/TravelInfo">出行信息</Link>
                    </Button>
                    <Button variant={clientPathname === '/RideShare' ? 'default' : 'outline'} asChild>
                        <Link href="/RideShare">拼车</Link>
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default Content;
