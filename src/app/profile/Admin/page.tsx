'use client'
import {OptionProfile} from "@/types/componentBased/types"
import axios from "axios"
import {Provider} from "react-redux"
import {GetUserProfile} from '@/src/app/api/utilis/acces/user/data/userData'
import EngpyLogo from '@/src/app/components/EngpyLogo';
import {ArrowDownIcon} from '@/src/app/components/icons/iconsSvg';
import {UserViatalLoginAttribute} from '@/types/componentBased/types';
import {Profile} from '@prisma/client';
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import BarCharts from "../../components/Designs/Charts/BarcChar.tsx/chat"



export default function AdminProfile(user: any) {
    useEffect(() => { }, [])
    const route = useRouter();

    function redirect() {
        route.push('Admin/deploy')
    }
    return (

        <div className="h-full min-h-screen bg-zinc-800 w-full py-3  hs-none  p_c flex justify-center px-10 ">
            <div className="bg-zinc-800 w-full rounded px-10 ">
                <div>
                    {/* <h1 className="text-[30px] text-slate-100   p_c">
                        Deployment Manager
                    </h1> */}
                    <input placeholder='Search' className='w-full focus:mr-10 mt-2 mb-15 bg-zinc-700 w-[350px] text-slate-200 py-2 px-2 rounded-md focus:outline-none' />
                </div>



                <div className='grid grid-cols-1 lg:grid-cols-3 mt-1 gap-x-[10px] gap-y-[10px] '>

                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out bg-zinc-900 shadow-full shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]  w-full">



                        <h1 className='text-slate-100   space-x-5 w-[34%] hover:skew-y-4 font-semibold text-sans text-[12px]' onClick={redirect}>New Topics</h1>

                    </div>


                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out p-6 bg-zinc-900 shadow-full hover:translate-y-100 shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-100   space-x-10 w-[34%] hover:skew-y-4  font-semibold text-sans text-[12px]' onClick={redirect}> Document Template </h1>

                    </div>


                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out p-6 bg-zinc-900 shadow-full shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-200 space-x-5 w-[34%] hover:skew-y-4 font-semibold text-sans text-[12px]' onClick={redirect}>Update Topic Content </h1>

                    </div>

                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out p-6 bg-zinc-900 shadow-full shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-200 space-x-5 w-[34%] font-semibold text-sans text-[12px]' onClick={redirect}>View Topics </h1>

                    </div>


                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out p-6 bg-zinc-900 shadow-full shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-200 space-x-5 w-[34%] font-semibold text-sans text-[12px]' onClick={redirect}>Delete Topics Content</h1>

                    </div>


                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out translate-y-1 p-6 bg-zinc-900 shadow-full shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-200 space-x-5 w-[34%] font-semibold text-sans text-[12px]' onClick={redirect}>Add New Content</h1>

                    </div>


                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out bg-zinc-900 shadow-full  shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-100   space-x-10 w-[34%] font-semibold text-sans text-[12px]' onClick={redirect}> Remove Content </h1>

                    </div>
                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out bg-zinc-900 shadow-full  shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-100   space-x-10 w-[34%] font-semibold text-sans text-[12px]' onClick={redirect}> Modify content </h1>

                    </div>

                    <div onClick={redirect} className=" hover:skew-y-1 hover:skew-x-1  transition duration-300 ease-in ease-out bg-zinc-900 shadow-full  shadow-md flex  text-center items-center  justify-center rounded-md w-[30px] h-[250px]    w-full">



                        <h1 className='text-slate-100   space-x-10 w-[34%] font-semibold text-sans text-[12px]' onClick={redirect}>View Root Content </h1>

                    </div>



                </div>
            </div>
        </div>
        // </div >
        // </Provider>
    )

}



