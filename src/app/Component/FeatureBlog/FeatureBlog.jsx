import React from "react";
import Image from "next/image";
import { blogData } from "../../StaticData/data";
import Typography from "../Typography";

export default function ThirdContainer() {
  return (
    <section >
      <div className="relative container mx-auto mt-20 border mb-20 ">
        <Image
          src={blogData.image}
          alt={blogData.title}
          width={1300}
          height={300}
          className="w-full h-auto rounded-lg"
        />

        <div
          className="absolute -bottom-19 right-0 bg-white flex flex-col gap-3 p-6 rounded-lg max-w-3xl shadow-sm"
        >
          <div className="flex gap-4">
            <Typography
              variant="heading"
              className="text-[#7C4EE4] text-[11px]"
            >
              {blogData.category}
            </Typography>

            <Typography
              variant="paragraph"
              className="text-[#373737] text-[11px]"
            >
              {blogData.date}
            </Typography>
          </div>
          <Typography variant="heading" className="text-[#150E06] text-[20px]">
            {blogData.title}
          </Typography>

          <Typography
            variant="paragraph"
            className="text-[#373737] text-[14px]"
          >
            {blogData.description}
          </Typography>

          <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-sm w-fit">
            {blogData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
