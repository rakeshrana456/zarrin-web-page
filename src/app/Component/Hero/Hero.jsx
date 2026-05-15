import React from "react";
import Typography from "../Typography";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#7C4EE4] overflow-hidden py-20">
      <div className="absolute -top-35 -left-1">
        <Image
          src="/Hero/Mask group.svg"
          alt="vector"
          width={585}
          height={158}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col  justify-around gap-4">
          <Typography variant="paragraph" className="text-white text-[16px]">
            Featured Post
          </Typography>

          <Typography
            variant="heading"
            className="font-bold text-[40px] md:text-[64px]"
          >
            How AI will <br />
            Change the Future
          </Typography>

          <div className="max-w-102.5 ">
            <Typography variant="heading" className="text-white text-[16px]">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </Typography>
          </div>

          <button className="bg-white text-[#373737] px-6 py-3 rounded-sm w-fit">
            <Typography variant="heading">Read more</Typography>
          </button>
        </div>

        <div className="flex justify-center relative">
          <Image
            src="/Hero/Hero-Ai.png"
            alt="hero"
            width={436}
            height={413}
            className="w-full  h-auto"
          />
        </div>
      </div>
      <div className="absolute top-135 right-0">
        <Image
          src="/Footer/Mask group (1).svg"
          alt="vector"
          width={585}
          height={158}
        />
      </div>
    </section>
  );
}
