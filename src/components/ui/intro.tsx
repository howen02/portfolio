import React from "react";

const Intro = () => {
    return (
        <div className="flex justify-center align-center pt-10">
            <div className="rounded-lg bg-white p-4 border-black border-2 w-1/2">
                <div className="m-4">
                    <div className="mb-4">
                        <span className="text-4xl font-bold">Who am I?</span>
                    </div>
                    <p>
                        I'm currently a second-year Computer Science student
                        studying at the National University of Singapore. You
                        can also catch me exploring Web3 and trading NFTs on the
                        side if not watching my favourite Anime.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
