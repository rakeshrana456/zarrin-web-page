import Typography from "../Component/Typography";
import BlogPost from "../Component/Blogpost/BlogPost";
import Image from "next/image";
import group from "../../../public/About/Group.png";
import { cards } from "../StaticData/data";
export default function AboutPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-20">
          <div className="mt-12 md:mt-20">
            <Typography
              variant="heading"
              className="flex justify-center text-sm md:text-base font-bold text-[#666666] mb-3 md:mb-4"
            >
              About us
            </Typography>

            <Typography
              variant="heading"
              className="flex justify-center text-center text-3xl md:text-5xl font-bold text-[#333333] mb-4"
            >
              Creative Blog Writting and publishing site
            </Typography>

            <Typography
              variant="paragraph"
              className="text-center text-sm md:text-base text-[#666666] mb-4 max-w-3xl mx-auto leading-7"
            >
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </Typography>
          </div>
          <div>
            <Image
              src={group}
              alt="group Image"
              height={400}
              width={400}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20">
            <div className="flex flex-col gap-6">
              <div>
                <Typography
                  variant="paragraph"
                  className="text-[#666666] font-bold"
                >
                  HOW WE WORK
                </Typography>
              </div>
              <div>
                <Typography
                  variant="heading"
                  className="text-[#333333] font-bold text-[24px] lg:text-[48px] leading-9 lg:leading-16"
                >
                  I will show you how <br />
                  our team works
                </Typography>
              </div>
            </div>
            <div className="flex items-end">
              <Typography
                variant="paragraph"
                className="text-[#666666] font-bold"
              >
               Bring to the table win-win market strategies to ensure <br /> perfect articles. 
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {cards.map((card, key) => (
              <div key={key} className="flex ">
                <div className="bg-[#7C4EE4] p-6 rounded-lg flex flex-col justify-between items-start" >
                  <div className="text-[48px] font-bold text-white">
                    {card.number}
                  </div>

                  <div className="mt-4">
                    <h2 className="text-[24px] font-bold text-white">
                      {card.title}
                    </h2>
                  </div>

                  <div className="mt-4">
                    <p className="text-white text-[16px] leading-7">
                      {card.description}
                    </p>
                  </div>

                  <button className="mt-6 text-white border-b border-white">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <BlogPost blogs={BlogDataRender} /> */}
      </section>
    </>
  );
}
