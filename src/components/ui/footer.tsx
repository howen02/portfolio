import { HStack, Tag, TagLabel } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex justify-center pb-4">
            <div className="bg-white w-3/4 rounded-lg flex justify-center">
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <aside>
                        <p className="text-2xl font-semibold">
                            Built by Howen, 2024
                        </p>
                    </aside>

                    <HStack className="mt-2">
                        <Link
                            href={"https://github.com/howen02"}
                            target="_blank"
                        >
                            <Tag
                                size={"lg"}
                                variant="outline"
                                colorScheme="white"
                            >
                                <TagLabel>GitHub</TagLabel>
                            </Tag>
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/howenyap/"}
                            target="_blank"
                        >
                            <Tag
                                size={"lg"}
                                variant="outline"
                                colorScheme="white"
                            >
                                <TagLabel>LinkedIn</TagLabel>
                            </Tag>
                        </Link>
                        <Link
                            href={"mailto:howenyap@u.nus.edu"}
                            target="_blank"
                        >
                            <Tag
                                size={"lg"}
                                variant="outline"
                                colorScheme="white"
                            >
                                <TagLabel>Email</TagLabel>
                            </Tag>
                        </Link>
                    </HStack>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
