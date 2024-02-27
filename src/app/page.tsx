"use client";

import Intro from "components/ui/intro";
import React from "react";
import Images from "components/ui/images";
import Card from "components/ui/card";

export default function Home() {
    return (
        <div className="h-[50rem] w-full dark:bg bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>

            <div>
                <div className="text-9xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b py-8">
                    Hi, I'm <span className="text-blue-500">Howen</span>
                </div>
                <Intro />
                <Images />
            </div>
        </div>
    );
}
