import React from "react";
import Typography from "../Typography";
import Image from "next/image";
import logo from "../../../../public/Navbar/Logo.png";
export default function Footer() {
  const array = ["Home", "Blog", "About", "Contact Us"];
  const SocialLinks = ["FB", "IG", "LN", "YT"];
  return (
    <>
    <section className="py-16">
      <section className="relative bg-[#7C4EE4] overflow-hidden py-16 lg:py-24 space-y-20">
        {/* Top Shape */}
      
        <div className="absolute -top-20 -left-10 opacity-40 lg:opacity-100">
          <Image
            src="/Hero/Mask group.svg"
            alt="vector"
            width={585}
            height={158}
            className="w-[250px] sm:w-[350px] lg:w-auto h-auto"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Heading */}
            <Typography
              variant="paragraph"
              className="
          text-white
          text-[28px]
          sm:text-[36px]
          lg:text-[48px]
          leading-tight
          font-semibold
        "
            >
              Get our stories delivered From
              <br className="hidden sm:block" />
              us to your inbox weekly.
            </Typography>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
              <input
                type="text"
                placeholder="Your email"
                className="
            w-full
            sm:flex-1
            h-12
            px-4
            rounded-md
            bg-white
            text-gray-700
            outline-none
          "
              />

              <button className="w-full sm:w-auto">
                <Typography
                  variant="paragraph"
                  className="
              text-white
              border
              cursor-pointer
              border-white
              h-12
              px-6
              rounded-md
              flex
              items-center
              justify-center
              hover:bg-white
              hover:text-[#7C4EE4]
              transition
            "
                >
                  Get started
                </Typography>
              </button>
            </div>

            {/* Bottom Text */}
            <Typography
              variant="paragraph"
              className="
          text-white
          text-[12px]
          sm:text-[14px]
          text-center
          leading-relaxed
          max-w-2xl
        "
            >
              Get a response tomorrow if you submit by 9pm today. If we receive
              it after 9pm, you will get a response the following day.
            </Typography>
          </div>

          {/* Bottom Shape */}
        </div>
        <div className="absolute top-80 right-1 opacity-40 lg:opacity-100">
          <Image
            src="/Footer/Mask group (1).svg"
            alt="vector"
            width={585}
            height={158}
            className="lg:w-auto h-auto"
          />
        </div>
        
      </section>
      <footer className="flex flex-col gap-3 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex justify-center gap-2">
            <Image src={logo} alt="logo" width={25} height={25} />
            <Typography
              variant="heading"
              className="text-[#150E06] text-xl font-bold "
            >
              Zarrin
            </Typography>
          </div>
          <div className="flex justify-center gap-4 mt-4 mb-4">
            {array.map((item, index) => {
              return (
                <Typography
                  key={index}
                  variant="paragraph"
                  className="text-[#150E06] text-[11px] text-center cursor-pointer"
                >
                  {item}
                </Typography>
              );
            })}
          </div>
          <div className="flex justify-center gap-4 mt-4 mb-4">
            {SocialLinks.map((item, index) => {
              return (
                <Typography
                  key={index}
                  variant="paragraph"
                  className="cursor-pointer p-3 text-sm text-white  text-center border rounded-full h-6 w-6  flex items-center justify-center bg-[#7C4EE4]"
                >
                  {item}
                </Typography>
              );
            })}
          </div>
        </div>

       <hr className="w-full lg:w-4/5 mx-auto border border-[#7C4EE4]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mt-4 mb-4">
            <Typography
              variant="paragraph"
              className="text-[#333333] text-[11px] text-center"
            >
              © Copyright Ideapeel Inc © 2023. All Right Reserved.
            </Typography>
          </div>
        </div>
      </footer>
      </section>
    </>
  );
}
