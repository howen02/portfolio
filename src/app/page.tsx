"use client";

import React from "react";
import Intro from "src/components/ui/intro";
import Projects from "src/components/ui/projects";
import { NameTypeWriterEffect } from "src/components/ui/typewriter-effect";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "src/components/ui/footer";

export default function Home() {
    return (
        <ChakraProvider>
            <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex justify-center">
                <div>
                    {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div> */}
                    <NameTypeWriterEffect />
                    <Intro />
                    <Projects />
                    <Footer />
                </div>
            </div>
        </ChakraProvider>
    );
}
