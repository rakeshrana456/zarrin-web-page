import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Typography from '../Typography';
import { Search } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className='container flex justify-between items-center py-4 mx-auto '>
          <div className='flex items-center gap-2'>
            <Image
              src="/Logo.png"
              width={31}
              height={31}
              alt="" />
            <Typography variant="heading" className="text-[#333333] text-xl font-bold">Zarrin</Typography>
          </div>
          <div className='flex items-center gap-4'>

            <Link href="/" >
            <Typography variant='paragraph' className='text-[#333333] text-[11px] hover:text-[#7C4EE4]'>Blog</Typography>
            </Link>


            <Link href="/about">
            <Typography variant='paragraph' className='text-[#333333] text-[11px] hover:text-[#7C4EE4]'>About</Typography>
            </Link>

            <Search className="w-4 h-4 text-gray-700" />
            <button className="bg-[#7C4EE4] p-2 rounded-sm">
              <Typography variant='heading' className=' text-[11px] text-white-200 w-20'> Contact Us</Typography>
            </button>
          </div>
        </div>


      </nav>
    </>
  )
}

