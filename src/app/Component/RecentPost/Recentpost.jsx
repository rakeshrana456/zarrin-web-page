import Typography from "../Typography";
import Image from "next/image";
import { blogData } from "../../StaticData/data";

export default function Recentpost() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-4">
          <Typography
            variant="heading"
            className="text-[32px] lg:text-[48px] font-bold text-[#333333] text-center sm:text-left"
          >
            Our Recent Posts
          </Typography>

          <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-sm w-fit h-10">
            View
          </button>
        </div>

        <div className="flex flex-col lg:flex-row mt-10 mb-20 gap-8">
          <div className="lg:w-1/2">
            <Image
              src={blogData.imageAlt}
              alt={blogData.title}
              width={1300}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col  gap-4 ">
            <div className="flex gap-4 flex-wrap">
              <Typography
                variant="heading"
                className="text-[#373737] text-[12px] font-bold"
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
              className="text-[#150E06] text-[24px] lg:text-[32px] leading-tight"
            >
              {blogData.title}
            </Typography>

            <Typography
              variant="paragraph"
              className="text-[#373737] text-[14px] lg:text-[16px] leading-relaxed"
            >
              {blogData.description}
            </Typography>

            <button className="text-[#7C4EE4] border border-[#7C4EE4]px-4 py-2 rounded-md w-fit cursor-pointer mt-14 p-3">
              {blogData.buttonText}
            </button>
          </div>
        </div>
        <div className="lg:hidden flex flex-row sm:flex-col justify-between items-center gap-4">
          <Typography
            variant="heading"
            className="text-[20px] lg:text-[48px] font-bold text-[#333333] text-center sm:text-left"
          >
            Our Recent Posts
          </Typography>

          <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-sm w-fit h-10">
            View
          </button>
        </div>
      </div>
    </section>
  );
}
