import React from "react";

import Image from "next/image";

const Intro = () => {
    const length = 400;

    return (
        <div className="h-screen justify-center align-center pt-10">
            <div className="flex justify-center">
                <div className="rounded-lg bg-white p-4 border-black border-2 w-2/4">
                    <div className="mb-4">
                        <span className="text-4xl font-bold">Who am I?</span>
                    </div>
                    <p>
                        I'm currently in my second year pursuing a Bachelor's
                        degree in Computer Science at the esteemed National
                        University of Singapore, where I am immersing myself in
                        the ever-evolving world of technology.
                        <br />
                        <br />
                        With a keen interest in frontend development, I aim to
                        design user interfaces that are visually appealing and
                        easy to navigate, ensuring an excellent user experience.
                        I continually refine my skills and stay abreast of
                        industry trends to create seamless and engaging digital
                        interactions. Through my dedication to mastering UI/UX
                        design, I strive to have a meaningful impact on
                        enhancing user satisfaction and usability in the digital
                        sphere.
                        <br />
                        <br />
                        Moreover, you can often find me delving into Web3
                        technologies, particularly exploring decentralized
                        finance (DeFi) protocols and their potential
                        applications. Below are some of the NFTs (Non-fungible
                        tokens) I've collected so far 👇🏻
                    </p>
                </div>
            </div>

            <div className="flex space-x-10 justify-center my-20">
                <Image
                    src={"/naru.png"}
                    alt="naru"
                    width={length}
                    height={length}
                    className="rounded-lg"
                />
                <Image
                    src={"/ore.png"}
                    alt="naru"
                    width={length}
                    height={length}
                    className="rounded-lg"
                />
                <Image
                    src={"/tgt.gif"}
                    alt="naru"
                    width={length}
                    height={length}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default Intro;
