import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import Image from "next/image";

const Intro = () => {
    const imageSize = 350;
    return (
        <div className="min-h-screen flex flex-col items-center pt-14">
            <div className="w-4/5 mx-auto">
                <Card className="flex flex-col">
                    <CardBody>
                        <Text className="text-4xl font-bold">
                            A little bit about me
                        </Text>
                        <Text className="mt-5">
                            I am currently in my sophomore year, working towards
                            earning a Bachelor's degree in Computer Science from
                            the esteemed{" "}
                            <span className="highlight-text">
                                National University of Singapore
                            </span>
                            . Furthermore, I am diving deep into focus areas
                            such as Artificial Intelligence to explore its use
                            cases in real-world scenarios. With the rise of AI,
                            I believe that its integration into our daily
                            workflows is inevitable
                            <br />
                            <br />
                            With an interest in becoming a full-stack developer,
                            I'm currently learning{" "}
                            <span className="highlight-text">NextJS</span>,
                            appreciating Vercel's remarkable efforts in
                            delivering a front-end framework with integrated
                            back-end capabilities. Simultaneously, I am delving
                            into <span className="highlight-text">Golang</span>
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
                    <div className="w-full lg:w-1/3 px-4">
                        <Image
                            src={"/naru.png"}
                            alt={"naru"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-12 lg:mb-0"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <Image
                            src={"/ore.png"}
                            alt={"ore"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-12 lg:mb-0"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <Image
                            src={"/tgt.gif"}
                            alt={"crystal hand"}
                            width={imageSize}
                            height={imageSize}
                            layout="responsive"
                            className="rounded-lg mb-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
