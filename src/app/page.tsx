"use client";

import Intro from "components/ui/intro";
import React from "react";
import Images from "components/ui/images";

export default function Home() {
    return (
        <div className="w-full dark:bg bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-center">
            <div className="h-[50rem]">
                <p className="text-9xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b py-8">
                    Hi, I'm <span className="text-blue-500">Howen</span>
                </p>
                <Intro />
                <Images />
            </div>
        </div>
    );
}
