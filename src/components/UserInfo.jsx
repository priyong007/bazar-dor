'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
   
    const handleSignOut = async() => {
        await authClient.signOut()
    };

    return (
        <div>
            {
                user ? <div>
                    

                    <Link href={'/profile'}>
                    <div className='flex items-center gap-6 bg-base-100 p-2 border-2 border-purple-300  rounded-box my-4 '>
                        <div>
                            <h2 className=''> {user?.name}</h2>
                        </div>
                        <div>
                            <button onClick={handleSignOut} className='btn bg-red-500 text-white px-4 py-4 btn-xs'>Sign Out</button>
                        </div>
                    </div>
                    
                    </Link>
                </div>

                    :
                    <div className='flex gap-2'>

                        <Link href={'/signin'}>
                            <button className='btn rounded-xl border-0 text-sm sm:text-base'>
                                সাইন ইন
                            </button>
                        </Link>

                        <Link href={'/signup'}>

                            <button className='btn bg-[#1A9951] rounded-xl text-white text-sm sm:text-base'>
                                সাইন আপ
                            </button>

                        </Link>
                    </div>
            }

        </div>
    );
};

export default UserInfo;