import Image from "next/image";
import Link from "next/link"
import Typography from "../Typography";
export default function BlogCard({ data }) {
  return (
    <>
      <section>
        <div className="w-full pt-6 px-4 ">
      <div className="flex flex-col gap-4 h-full justify-between">
    <div>
      <Image
        src={data.image}
        alt={data.imageAlt}
        width={400}
        height={360}
        className="w-full h-auto"
      />
            </div>
            <div className="flex gap-4">
              <div>
                <Typography variant="paragraph" className="text-[12px]">
                  {data.category}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="paragraph"
                  className="text-[14px] text-[#999999]"
                >
                  {data.date}
                </Typography>
              </div>
            </div>

            <div>
              <div>
                <Typography
                  variant="heading"
                  className="text-[24px] text-[#333333] font-bold"
                >
                  {data.title}
                </Typography>
              </div>

              <div className="min-h-30">
                <Typography
                  variant="heading"
                  className="text-[16px] text-[#666666]"
                >
                  {data.description}
                </Typography>
              </div>
              <div className="mt-auto">
             <Link href={`/blog/${data.slug}`}>
                <Typography
                  variant="heading"
                  className="text-[#7C4EE4]  text-[18px] font-bold underline cursor-pointer hover:text-purple-400 hover:opacity-90 transition-all duration-200"
                >
                  {data.buttonText}
                </Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
