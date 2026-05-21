import Typography from "../Component/Typography";
import BlogPost from "../Component/Blogpost/BlogPost";
import Image from "next/image";
import group from "../../../public/About/Group.png";
import { cards } from "../StaticData/data";
export default function AboutPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 md:px-6">
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
                    
              
                {cards.map((card, key) => (
                  <div key={key} >
                    <div className="bg-[#7C4EE4] p-6 rounded-xl ">
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
        {/* <BlogPost blogs={BlogDataRender} /> */}
      </section>
    </>
  );
}
