import React from "react";
import Typography from "../Component/Typography";
import BlogPost from "../Component/Blogpost/BlogPost";
import { BlogDataRender } from "../StaticData/data";

export default function Blogpage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="mt-12 md:mt-20">
            <Typography
              variant="heading"
              className="flex justify-center text-sm md:text-base font-bold text-[#666666] mb-3 md:mb-4"
            >
              Our Blogs
            </Typography>

            <Typography
              variant="heading"
              className="flex justify-center text-center text-3xl md:text-5xl font-bold text-[#333333] mb-4"
            >
              Find our all blogs from here
            </Typography>

            <Typography
              variant="paragraph"
              className="text-center text-sm md:text-base text-[#666666] mb-4 max-w-3xl mx-auto leading-7"
            >
              our blogs are written from very research research and well known
              writers writers so that we can provide you the best blogs and
              articles articles for you to read them all along.
            </Typography>
          </div>
        </div>
        <BlogPost blogs={BlogDataRender} />
      </section>
    </>
  );
}
