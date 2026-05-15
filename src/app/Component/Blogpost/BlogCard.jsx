import Image from "next/image";
import Typography from "../Typography";
export default function BlogCard({ data }) {
  return (
    <>
      <section>
        <div className="container mx-auto pt-6">     
        <div className="flex flex-col gap-4 h-full ">
          <div >
            <Image
              src={data.image}
              alt={data.imageAlt}
              width={400}
              height={360}
            />
          </div>
          <div className="flex gap-4">
          <div>
            <Typography variant="paragraph" className="text-[12px]">
              {data.category}
            </Typography>
          </div>
          <div>
            <Typography variant="paragraph" className="text-[14px] text-[#999999]">
              {data.date}
            </Typography>
          </div>
          </div>
          <div>
            <Typography variant="heading" className="text-[24px] text-[#333333] font-bold">
              {data.title}
            </Typography>
          </div>

          <div>
            <Typography variant="heading" className="text-[16px] text-[#666666] ">
              {data.description}
            </Typography>
          </div>
          <div>
            <Typography variant="heading" className="text-[#7C4EE4]  text-[18px] font-bold underline cursor-pointer ">
             {data.buttonText}
            </Typography>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
