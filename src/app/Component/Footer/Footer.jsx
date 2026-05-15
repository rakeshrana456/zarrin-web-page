import React from "react";
import Typography from "../Typography";
import Image from "next/image";
export default function Footer() {
  const array = ["Home", "Blog", "About", "Contact Us"];
  const SocialLinks = ["FB", "IG", "LN", "YT"];
  return (
    <>
      <section className="relative bg-[#7C4EE4] overflow-hidden py-20">
        <div className="absolute -top-35 -left-1">
          <Image
            src="/Hero/Mask group.svg"
            alt="vector"
            width={585}
            height={158}
          />
        </div>

        <div className="container mx-auto  ">
          <div className="flex flex-col items-center gap-8">
            <Typography variant="paragraph" className="text-white text-[38px] text-center leading-10 ">
              Get our stories delivered From <br />
              us to your inbox weekly.
            </Typography>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your email "
                className="border bg-[#ffffff] text-gray-400 w-[229] h-[40] rounded-md "
              />
              <button>
                {" "}
                <Typography
                  variant="paragraph"
                  className="text-white border w-[119] h-[40] rounded-md flex items-center justify-center"
                >
                  Get started
                </Typography>{" "}
              </button>
             
            </div>
            <div>
                 <Typography variant="paragraph" className="text-white text-[11px] text-center">
                Get a response tomorrow if you submit by 9pm today. If we received after <br /> 9pm will get a reponse the following day.
                </Typography>
            </div>
          </div>

          <div className="flex justify-center"></div>

           <div className="absolute top-50 right-1">
          <Image
            src="/Footer/Mask group (1).svg"
            alt="vector"
            width={585}
            height={158}
          />
        </div>

        </div>
      </section>
      <footer className="flex flex-col gap-3 max-w-6xl mx-auto px-4">
        <div className="container flex justify-center gap-2">
          <Image src="/Navbar/logo.png" alt="logo" width={25} height={25} />
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
                className="text-[#333333] text-[11px] text-center"
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
                className=" p-3 text-sm text-white  text-center border rounded-full h-6 w-6  flex items-center justify-center bg-[#7C4EE4]"
              >
                {item}
              </Typography>
            );
          })}
        </div>
        <hr className="border border-[#7C4EE4]" />
        <div className="flex justify-center gap-4 mt-4 mb-4">
          <Typography
            variant="paragraph"
            className="text-[#333333] text-[11px] text-center"
          >
            © Copyright Ideapeel Inc © 2023. All Right Reserved.
          </Typography>
        </div>
      </footer>
    </>
  );
}
