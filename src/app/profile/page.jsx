'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfilePage = () => {

    const { data: session } = authClient.useSession();
        const user = session?.user;

        const handleSignOut = async() => {
                await authClient.signOut()
            };
        

    return (
        <div className='max-w-7xl mx-auto'>
           
           <h2 className='text-2xl font-bold my-4'>আমার প্রোফাইল</h2>
                    <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
           <div>
             <div className='flex gap-6 bg-base-300 p-4  rounded-2xl my-4 '>
                        <div>
                            <h2 className=''>Name : {user?.name}</h2>
                            <h2>Email : {user?.email}</h2>
                        </div>
                        
                    </div>
            </div> 
        </div>
    );
};

export default ProfilePage;