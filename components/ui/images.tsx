import Image from "next/image";
import React from "react";

const Images = () => {
    const length = 300;
    return (
        <div className="flex mt-10">
            <Image
                src={"/naru.png"}
                alt="naru"
                width={length}
                height={length}
                className="rounded-lg"
            />
            <Image src={"/ore.png"} alt="naru" width={length} height={length} />
            <Image src={"/tgt.gif"} alt="naru" width={length} height={length} />
        </div>
    );
};

export default Images;
