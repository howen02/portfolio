import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import Image from "next/image";

const Intro = () => {
    const imageSize = 350;
    return (
        <div className="flex flex-col items-center">
            <div>
                <Card className="flex flex-col">
                    <CardBody>
                        <Text className="text-4xl font-bold">
                            A little bit about me
                        </Text>
                        <Text className="mt-5">
                            I am currently in my Penultimate year, working
                            towards earning a Bachelor's degree in Computer
                            Science from the esteemed{" "}
                            <span className="highlight-text">
                                National University of Singapore
                            </span>
                            . Despite the AI boom, I've chosen my path to dive
                            into focus areas like databases and paralell
                            computing. My belief is that these areas will remain
                            crucial to power AI systems with the vast amount of
                            information stored to train models.
                            <br />
                            <br />
                            With an interest in becoming a full-stack developer,
                            I'm currently learning{" "}
                            <span className="highlight-text">NextJS</span>.
                            Vercel has done a great job in delivering a
                            front-end framework with integrated back-end
                            capabilities. Moreover, I am delving into{" "}
                            <span className="highlight-text">Golang</span>
                            , attracted by its simplicity, efficiency, and
                            robust performance.
                            <br />
                            <br />
                            In my spare time, I like to explore Web3
                            technologies, particularly{" "}
                            <span className="highlight-text">
                                Decentralized Finance (DeFi)
                            </span>{" "}
                            protocols and their potential applications. Here are
                            some of the{" "}
                            <span className="highlight-text">
                                NFTs (Non-fungible tokens)
                            </span>{" "}
                            I've collected so far! 👇🏻
                        </Text>
                    </CardBody>
                </Card>
                <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-12 mt-10 w-full">
                    <div className="w-full lg:w-1/3">
                        <Image
                            src={"/naru.png"}
                            alt={"naru"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-12 lg:mb-0 hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 ">
                        <Image
                            src={"/ore.png"}
                            alt={"ore"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-12 lg:mb-0 hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <Image
                            src={"/tgt.gif"}
                            alt={"crystal hand"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-12 lg:mb-0 hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <Image
                            src={"/cubs.png"}
                            alt={"cub"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-12 lg:mb-0 hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
