import React from "react";
import Typography from "../Component/Typography";
import { Home, Mail, Phone } from "lucide-react";
import Image from "next/image";
export default function Contact() {
  const cards = [
    {
      id: 1,
      icon: <Home size={24} />,
      title: "Office",
      info: "Victoria Street, London, UK",
      active: false,
    },
    {
      id: 2,
      icon: <Mail size={24} />,
      title: "Email",
      info: "hello@zarrin.com",
    },
    {
      id: 3,
      icon: <Phone size={24} />,
      title: "Phone",
      info: "(001) 2342 3451",
    },
  ];
  return (
    <>
      <section>
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-10">
          <div className="mt-12 md:mt-20">
            <Typography
              variant="heading"
              className="flex justify-center text-sm md:text-base font-bold text-[#666666] mb-3 md:mb-4"
            >
              Get in Touch
            </Typography>

            <Typography
              variant="paragraph"
              className="text-center text-sm md:text-base text-[#666666] mb-4 max-w-3xl mx-auto leading-7"
            >
              Contact us to publish your content and show ads to our website and
              get a good reach.
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`bg-[#F8F8F8] rounded-2xl h-55    flex flex-col items-center justify-center text-center transition-all duration-300
              
              ${
                card.active
                  ? "border-2 border-[#7C4EE4]"
                  : "border border-transparent"
              }
            `}
              >
                
                <div className="w-14 h-14 rounded-full bg-[#7C4EE4] flex items-center justify-center text-white mb-5">
                  {card.icon}
                </div>
                <h3 className="text-[#7C4EE4] font-semibold text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm">{card.info}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20">
          <div className="w-full h-150 overflow-hidden">
            <Image
              src="/Contact/map.png"
              alt="map"
              height={200}
              width={900}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-10 -mt-20 relative z-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Name
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#7C4EE4]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#7C4EE4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Phone
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#7C4EE4]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#7C4EE4]"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Message
                </label>

                <textarea
                  rows={6}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none resize-none focus:border-[#7C4EE4]"
                ></textarea>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#7C4EE4] hover:bg-[#6b3fe0] text-white px-8 py-3 rounded-md transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
