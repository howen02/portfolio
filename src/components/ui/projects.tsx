"use client";

import React from "react";
import { HoverEffect } from "./card-hover-effect";

const Projects = () => {
    const projects = [
        {
            title: "Jomlah",
            description: "A clean and responsive car rental website",
            link: "https://github.com/howen02/Jomlah",
            tags: "NextJS - TypeScript - Tailwind",
        },
        {
            title: "Step Counter",
            description: "A health application to track your daily steps.",
            link: "https://github.com/howen02/StepCounter",
            tags: "ReactNative - TypeScript - IOS HealthKit - Expo ",
        },
        {
            title: "Snorlax",
            description:
                "A friendly chatbot for you to keep track of your daily tasks.",
            link: "https://github.com/howen02/ip",
            tags: "Java - JavaFX",
        },
        {
            title: "CNFT-Bot",
            description:
                "A telegram bot that shares analytics on the top performing Cardano NFTs",
            link: "https://github.com/howen02/CNFT-Bot",
            tags: "Python - PythonTelegramBot - OpenCNFT",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center mx-10">
            <h2 className="text-4xl font-bold bg-white rounded-lg px-5 py-5">
                I love building in my spare time, here are some projects I've
                made
            </h2>
            <HoverEffect items={projects} className="text-4xl" />
        </div>
    );
};

export default Projects;
