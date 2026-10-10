'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { toast } from 'react-toastify';

const SignInPage = () => {

        const onSubmit = async(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const user = Object.fromEntries(formData.entries());
            console.log(user);
    
            const {data, error} = await authClient.signIn.email({
                ...user,
                callbackURL: '/'
            })
    
            if(data){
                toast.success('successfully login')
                console.log(data);
                // redirect('/')
                
            }
            if(error){
                toast.error(error.message)
                console.log(error)
            }
        };


    return (
        <div className='max-w-7xl mx-auto my-4'>
                    <h3 className='text-center font-bold text-2xl my-2'>সাইন ইন</h3>
                    <p className='text-center mb-4 text-gray-500'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        
                    <form onSubmit={onSubmit} action="">
                        <fieldset 
                        className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
                            
                            <label className="label">ইমেইল</label>
                            <input name='email' type="email" className="input w-full" placeholder="you@example.com" />
        
                            <label className="label">পাসওয়ার্ড</label>
                            <input name='password' type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />
        
                            <button type='submit' className="btn bg-green-600 text-white mt-4">
                                সাইন ইন করুন
                                </button>
        
                                <div className='flex flex-row justify-center  gap-2'>
                                    <span><TfiLayoutLineSolid /></span>
                                    <p className='text-[16px]'>অথবা</p>
                                    <span><TfiLayoutLineSolid /></span>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='flex gap-1 btn '>
                                        <span className='text-green-400 '>
                                            <FaGoogle /></span>
                                            Google দিয়ে চালিয়ে যান
                                    </button>
                                    <button className='flex gap-1 btn '>
                                        <span className='text-black '>
                                            <FaGithub /></span>
                                            Github দিয়ে চালিয়ে যান
                                    </button>
                                </div>
                                <div className='flex justify-center gap-2'>
                                    <p>অ্যাকাউন্ট নেই? </p>

                                    <Link href={'/signup'}>
                                    <button className='text-green-600'>
                                        সাইন আপ করুন
                                        </button>
                                    
                                    </Link>
                                </div>
                        </fieldset>
                    </form>
                </div>
    );
};

export default SignInPage;