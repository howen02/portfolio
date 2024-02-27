"use client";

import Intro from "components/ui/intro";
import React from "react";

export default function Home() {
    return (
        <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="h-[50rem]">
                <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b py-8">
                    Hi, I'm <span className="text-blue-500">Howen</span>
                </p>
                <Intro />
            </div>
        </div>
    );
}
