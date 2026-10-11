
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
                        <Image className='bg-green-400 text-white p-2 rounded-box' width={50} height={50} alt='logo' src={'/logo-icon.png'} />
                        <div>
                            <p className='text-2xl font-bold'>বাজার দর</p>
                        <span className=" ">{date}</span>
                        </div>
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