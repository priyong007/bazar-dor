'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { toast } from 'react-toastify';

const SignUpPage = () => {

    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const {data, error} = await authClient.signUp.email({
            ...user,
            callbackURL: '/'
        })

        if(data){
            toast.success('Successfully Sign Up')
            console.log(data);
            redirect('/')
            
        }
        if(error){
            toast.error(error.message)
            console.log(error)
        }
    };

    const handleGoogleSignUp = async() => {
        const data = await authClient.signIn.social({
    provider: "google",
  });
  
};

    const handleGithubSignUp = async() => {
        const data = await authClient.signIn.social({
    provider: "github",
  });
  
}

    return (
        <div className='max-w-7xl mx-auto my-4'>
            <h3 className='text-center font-bold text-2xl my-2'>অ্যাকাউন্ট তৈরি করুন</h3>
            <p className='text-center mb-4 text-gray-500'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

            <form onSubmit={onSubmit} action="">
                <fieldset 
                className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
                    
                    <label className="label">নাম</label>
                    <input name="name" type="text" className="input w-full" placeholder="নাম" />
                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input w-full" placeholder="you@example.com" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <button type='submit' className="btn bg-green-600 text-white mt-4">
                        অ্যাকাউন্ট তৈরি করুন
                        </button>

                        <div className='flex flex-row justify-center  gap-2'>
                            <span><TfiLayoutLineSolid /></span>
                            <p className='text-[16px]'>Or</p>
                            <span><TfiLayoutLineSolid /></span>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={handleGoogleSignUp} className='flex gap-1 btn '>
                                <span className='text-green-400 '>
                                    <FaGoogle /></span>
                                    Google দিয়ে চালিয়ে যান
                            </button>
                            <button onClick={handleGithubSignUp} className='flex gap-1 btn '>
                                <span className='text-black '>
                                    <FaGithub /></span>
                                    Github দিয়ে চালিয়ে যান
                            </button>
                        </div>
                        <div className='flex justify-center gap-2'>
                            <p>অ্যাকাউন্ট আছে? </p>
                            
                            <Link href={'/signin'}>
                            <button className='text-green-600'>সাইন ইন করুন</button>
                            
                            </Link>
                        </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;