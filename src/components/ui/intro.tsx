import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import Image from "next/image";

const Intro = () => {
    const imageSize = 350;
    return (
        <div className="h-screen justify-center align-center pt-14">
            <Card className="flex flex-col justify-center mx-auto w-3/5">
                <CardBody>
                    <Text className="text-4xl font-bold">
                        A little bit about me
                    </Text>
                    <Text className="mt-3">
                        I'm currently in my second year pursuing a Bachelor's
                        degree in Computer Science at the National University of
                        Singapore. Furthermore, I'm actively engaged in
                        exploring Artificial Intelligence and their real-world
                        applications, as well as delving into the principles of
                        software engineering to design robust and scalable
                        software systems.
                        <br />
                        <br />
                        With a keen interest in frontend development, I aim to
                        design user interfaces that are visually appealing and
                        easy to navigate, ensuring an excellent user experience.
                        I continually refine my skills and keep up with industry
                        trends to create seamless and engaging digital
                        interactions. Through my dedication to mastering UI/UX
                        design, I strive to have a meaningful impact on
                        enhancing user satisfaction and usability in the digital
                        sphere.
                        <br />
                        <br />
                        Moreover, you can often find me delving into Web3
                        technologies, particularly exploring Decentralized
                        Finance (DeFi) protocols and their potential
                        applications. Here are some of the NFTs (Non-fungible
                        tokens) I've collected so far! 👇🏻
                    </Text>
                </CardBody>
            </Card>
            <div className="flex xs:flex-col justify-center space-x-12 mt-10">
                <Image
                    src={"/naru.png"}
                    alt={"naru"}
                    width={imageSize}
                    height={imageSize}
                    className="rounded-lg"
                />
                <Image
                    src={"/ore.png"}
                    alt={"ore"}
                    width={imageSize}
                    height={imageSize}
                    className="rounded-lg"
                />
                <Image
                    src={"/tgt.gif"}
                    alt={"crystal hand"}
                    width={imageSize}
                    height={imageSize}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default Intro;
