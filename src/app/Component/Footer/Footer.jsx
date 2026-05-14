import React from 'react'
import Typography from '../Typography'
import Image from 'next/image'
export default function Footer() {
    const array = ["Home", "Blog", "About", "Contact Us"]
    const SocialLinks = ["FB", "IG", "LN", "YT"]
    return (
        <>
            <footer className='flex flex-col gap-3 max-w-6xl mx-auto px-4'>
                <div className='container flex justify-center gap-2'>
                    <Image src="/Navbar/logo.png" alt="logo" width={25} height={25} />
                    <Typography variant="heading" className="text-[#150E06] text-xl font-bold ">Zarrin</Typography>
                </div>
                <div className='flex justify-center gap-4 mt-4 mb-4'>
                    {
                        array.map((item, index) => {
                            return (
                                <Typography key={index} variant='paragraph' className='text-[#333333] text-[11px] text-center'>{item}</Typography>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center gap-4 mt-4 mb-4'>
                    {
                        SocialLinks.map((item, index) => {
                            return (
                                <Typography key={index} variant='paragraph' className=' p-3 text-sm text-white  text-center border rounded-full h-6 w-6  flex items-center justify-center bg-[#7C4EE4]'>{item}</Typography>
                            )
                        })
                    }
                </div>
                <hr className='border border-[#7C4EE4]' />
                <div className='flex justify-center gap-4 mt-4 mb-4'>
                    <Typography variant='paragraph' className='text-[#333333] text-[11px] text-center'>© Copyright Ideapeel Inc © 2023. All Right Reserved.</Typography>
                </div>
            </footer>
        </>
    )
}