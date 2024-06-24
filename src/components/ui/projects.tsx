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
            title: "Alfred",
            description: "A Go backend to manage projects.",
            link: "https://github.com/howen02/golang-api",
            tags: "Go -  Gorilla/Mux - MySQL",
        },
        {
            title: "golink",
            description:
                "A URL shortener, built with Go",
            link: "https://github.com/howen02/golink",
            tags: "Go - Gin Gonic - Sqlite3",
        },
        {
            title: "Oyen",
            description:
                "An authentication page, that's it",
            link: "https://github.com/howen02/oyen",
            tags: "HTML - CSS - JS - Python - Sqlite3",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold bg-white rounded-lg px-5 py-5">
                I love building in my spare time, here are some projects I've
                made so far
            </h2>
            <HoverEffect items={projects} className="text-4xl w-full" />
        </div>
    );
};

export default Projects;
