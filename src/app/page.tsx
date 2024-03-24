import {
    Intro,
    Projects,
    Footer,
    NameTypeWriterEffect,
} from "src/components/ui";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
    return (
        <ChakraProvider>
            <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex justify-center">
                <div>
                    <NameTypeWriterEffect />
                    <Intro />
                    <Projects />
                    <Footer />
                </div>
            </div>
        </ChakraProvider>
    );
}
