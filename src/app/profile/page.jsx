'use client'

import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfilePage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut()
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries());
        await authClient.updateUser({
            ...newUserData
        })

    }


    return (
        <div className='max-w-7xl mx-auto'>

            <h2 className='text-2xl font-bold mt-4'>আমার প্রোফাইল</h2>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            <div>
                <div className='flex gap-6 bg-base-300 p-4 border-2  border-green-400 rounded-box  my-4 '>
                    <div className=''>
                        <h2 className=''>Name : {user?.name}</h2>
                        <h2>Email : {user?.email}</h2>
                    </div>

                </div>

                <div className=' bg-base-200 p-6 border-2 border-green-400 rounded-box'>
                    <p>তথ্য</p>
                    <p>নাম</p>

                    <form onSubmit={handleUpdateProfile} action="">
                        
                    <fieldset className="  fieldset border-base-300 rounded-box  border ">
                        
                        <div >
                            <input name='name' type="text" className="input join-item" placeholder="Upadte name" />
                            <button type='submit' className="btn w-full my-2 border-2">Update</button>
                        </div>
                    </fieldset>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ProfilePage;