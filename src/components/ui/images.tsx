import Image from "next/image";
import React from "react";

const Images = () => {
    const length = 300;
    return (
        <div className="flex justify-center mt-6">
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
    );
};

export default Images;
