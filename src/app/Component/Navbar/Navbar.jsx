"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "../Typography";
import { Search, Menu, X } from "lucide-react";
import logo from "../../../../public/Navbar/Logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();
  console.log(pathname, "pathName");
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image src={logo} width={31} height={31} alt="Logo" />

          <Typography
            variant="heading"
            className="text-[#333333] text-xl font-bold"
          >
            <Link href="/">Zarrin</Link>
          </Typography>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog">
            <Typography
              variant="paragraph"
              className={
                pathname === "/blog"
                  ? "text-[#7C4EE4] text-[11px]"
                  : "text-[#333333] text-[11px] hover:text-[#7C4EE4]"
              }
            >
              {" "}
              Blog{" "}
            </Typography>
          </Link>
          <Link href="/about">
            <Typography
              variant="paragraph"
              className={
                pathname === "/About"
                  ? "text-[#7C4EE4] text-[11px]"
                  : "text-[#333333] text-[11px] hover:text-[#7C4EE4]"
              }
            >
              {" "}
              About{" "}
            </Typography>
          </Link>
          <Search className="w-4 h-4 text-gray-700 cursor-pointer"  />
          <button className="bg-[#7C4EE4] p-2 rounded-sm">
            <Typography
              variant="heading"
              className=" text-[11px] text-white-200 w-20 cursor-pointer"
            >
              {" "}
              Contact Us{" "}
            </Typography>
          </button>
        </div>
        <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black  " />
          )}
        </button>
      </div>

      {openMenu && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link href="/blog">
            <Typography
              variant="paragraph"
              className={
                pathname === "/blog"
                  ? "text-[#7C4EE4] text-[11px]"
                  : "text-[#333333] text-[11px] hover:text-[#7C4EE4]"
              }
            >
              {" "}
              Blog{" "}
            </Typography>
          </Link>
          <Link href="/about">
            <Typography
              variant="paragraph"
              className="text-[#333333] text-[11px] hover:text-[#7C4EE4]"
            >
              {" "}
              About{" "}
            </Typography>
          </Link>
          <Search className="w-4 h-4 text-gray-700" />

          <button className="bg-[#7C4EE4] px-4 py-2 rounded-sm text-white w-fit cursor-pointer">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
