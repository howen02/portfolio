"use client";

import Intro from "src/components/ui/intro";
import React from "react";
import Images from "src/components/ui/images";
import { TypewriterEffectSmoothHello } from "src/components/ui/typewriter-effect";

export default function Home() {
    return (
        <div className="h-auto w-full dark:bg bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex justify-center">
            <div>
                <div className="h-screen">
                    <TypewriterEffectSmoothHello />
                </div>
                <div className="h-screen">
                    <Intro />
                    <Images />
                </div>
            </div>
        </div>
    );
}
