import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex justify-center pb-4">
            <div className="bg-white rounded-lg flex flex-col items-center py-4 w-full">
                <p className="text-2xl font-semibold text-black">
                    Built by Howen, 2024
                </p>
                <div className="mt-4">
                    <Link href="https://github.com/howen02" legacyBehavior>
                        <a
                            className="text-black px-4 py-2 border border-white rounded hover:bg-blue-500 hover:text-white mx-2"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/howenyap/"
                        legacyBehavior
                    >
                        <a
                            className="text-black px-4 py-2 border border-white rounded hover:bg-blue-500 hover:text-white mx-2"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </Link>
                    <Link href="mailto:howenyap@u.nus.edu" legacyBehavior>
                        <a
                            className="text-black px-4 py-2 border border-white rounded hover:bg-blue-500 hover:text-white mx-2"
                            target="_blank"
                        >
                            Email
                        </a>
                    </Link>
                    <Link
                        href="https://github.com/howen02/portfolio/blob/main/public/Resume_YapHoWen.pdf"
                        legacyBehavior
                    >
                        <a
                            className="text-black px-4 py-2 border border-white rounded hover:bg-blue-500 hover:text-white mx-2"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
