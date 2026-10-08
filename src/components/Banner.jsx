import Image from 'next/image';
import React from 'react';

const Banner = () => {

    const date = new Date().toLocaleDateString
     ("bn-BD", {
    dateStyle: "full",
  });

    return (
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 my-6 p-5 sm:p-6 md:p-8 shadow-md bg-[#FAFCFA] rounded-2xl'> 
    <div className='space-y-2 max-w-125 w-full'> 
        <p>{date}</p> 
        <h1 className='text-3xl sm:text-4xl font-bold'>আজকের বাজারের দাম এক নজরে</h1> 
        <p className='py-2'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p> 
        <button className='btn bg-[#1A9951]'>সব পণ্য দেখুন</button> 
    </div> 

    <div className='shrink-0'> 
        <Image 
            className='w-36 sm:w-60 md:w-87.5 h-auto'
            width={350} 
            height={350}  
            alt='hero-image' 
            src={'/bazar-hero.png'}
            
        /> 
    </div>    
</div>
    );
};

export default Banner;