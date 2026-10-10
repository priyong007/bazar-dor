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
                    <h2 className='text-2xl font-bold my-2'>আমার প্রোফাইল</h2>
                    <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                    <div className='flex gap-6 bg-base-300 p-4  rounded-2xl my-4 '>
                        <div>
                            <h2 className=''>Name : {user?.name}</h2>
                            <h2>Email : {user?.email}</h2>
                        </div>
                        <div>
                            <button onClick={handleSignOut} className='btn bg-green-500 px-4 py-4 btn-xs'>Sign Out</button>
                        </div>
                    </div>
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