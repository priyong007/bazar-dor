
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlinks from './Navlinks';
import UserInfo from './UserInfo';


const Header = () => {
    const date = new Date().toLocaleDateString
        ("bn-BD", {
            dateStyle: "full",
        });


    return (
        <header >
            <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-2'>

                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-4'>
                    <div className='flex items-center gap-2'>

                        <Image className='bg-[#1A9951] text-white p-2 rounded-2xl' width={50} height={50} alt='logo' src={'/logo-icon.png'} />
                        <span className="text-xs text-neutral-500">{date}</span>
                    </div>

                <UserInfo/>    
                </div>

            </div>

            <div className='border-gray-100 border-y-2'>

            <Navlinks />
            </div>



        </header>

    );
};

export default Header;