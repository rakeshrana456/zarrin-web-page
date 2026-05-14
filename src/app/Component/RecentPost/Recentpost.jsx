import Typography from "../Typography";
import Image from "next/image";
import { blogData } from "../../StaticData/data";
export default function Recentpost() {
  return (
    <>
      <section>
        <div className="container mx-auto mt-40">
          <div className="flex justify-between gap-4 ">
            <Typography
              variant="heading"
              className="text-[48px] font-bold text-[#333333] text-center"
            >
              Our Recent Posts
            </Typography>
            <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-sm w-30 h-10">
              view
            </button>
          </div>
          <div className="flex mx-auto mt-10 mb-20 gap-6">
            <Image
              src={blogData.imageAlt}
              alt={blogData.title}
              width={1300}
              height={300}
              className="w-full h-auto rounded-lg"
            />

            <div className="flex flex-col justify-between gap-4 p-4">
              <div className="flex gap-4">
                <Typography
                  variant="heading"
                  className="text-[#373737] text-[12px] font-bold"
                >
                  {blogData.category}
                </Typography>

                <Typography
                  variant="paragraph"
                  className="text-[#373737] text-[12px] font-bold"
                >
                  {blogData.date}
                </Typography>
              </div>
              <Typography
                variant="heading"
                className="text-[#150E06] text-[32px]"
              >
                {blogData.title}
              </Typography>

              <Typography
                variant="paragraph"
                className="text-[#373737] text-[16px]"
              >
                {blogData.description}
              </Typography>

              <button className="bg-[#7C4EE4] text-white px-4 py-2 rounded-sm w-fit">
                {blogData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
