import React from "react";
import Image from "next/image";
import { blogData } from "../../StaticData/data";
import Typography from "../Typography";
import Button from "../Button/Button";
import Link from "next/link";
export default function ThirdContainer() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative">
          <Image
            src={blogData.image}
            alt={blogData.title}
            width={1300}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
          />

          <div
            className="
              bg-white
              flex flex-col
              gap-4
              p-5 sm:p-6 lg:p-8
              rounded-xl
              shadow-lg
              mt-6
              lg:absolute
              lg:-bottom-16
              lg:right-0
              lg:max-w-4xl
            "
          >
            <div className="flex gap-4 flex-wrap items-center">
              <Typography
                variant="heading"
                className="text-[#373737] text-[12px] font-semibold uppercase"
              >
                {blogData.category}
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[#373737] text-[12px]"
              >
                {blogData.date}
              </Typography>
            </div>

            <Typography
              variant="heading"
              className="
                text-[#150E06]
                text-[22px]
                sm:text-[28px]
                lg:text-[32px]
                font-bold
                leading-tight
              "
            >
              {blogData.title}
            </Typography>

            <Typography
              variant="paragraph"
              className="
                text-[#373737]
                text-[11px]
                lg:text-[14px]
                leading-relaxed
              "
            >
              {blogData.description}
            </Typography>
            <Link href="/blog/vr-ai-technology">
              <Button variant="secondary">{blogData.buttonText}</Button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block h-32"></div>
      </div>
    </section>
  );
}
