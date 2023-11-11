"use client"
import Link from 'next/link'
import React, {JSXElementConstructor, useState, useEffect} from "react"
import {CodeIcon, LeftArrowIcon, ArrowDownIcon} from '.././components/icons/iconsSvg';
import {useRouter} from "next/navigation";
import Python from '@/public/asset/python.webp'
import EngpyLogo from '../components/EngpyLogo'
import user from '@/public/asset/user.png'
import Navbar from '../components/Navs/Navbar'
import Region from '@/types/Data/sortData'
import axios from 'axios'
import {Expriences, Prisma, PrismaClient} from '@prisma/client';
import {json} from 'stream/consumers';
import {EngpyPLanguage, Gender, Roles} from '@/utils/data/enums';
import {Exprience, UserLogin, UserSignup} from '@/utils/data/interface';
import {textTransform} from '@/utils/tools/tranform';
import {AuthUser} from '@/utils/authenticate/auth';
import bcryptjs, {hash} from 'bcryptjs';


export async function getServerSidePros() {
    const user = await new PrismaClient().user.findMany()
    return {
        props: {initialUser: user}
    }
}


export default function LoginPage() {

    const router = useRouter();

    const [Error, setError] = useState<UserLogin>(
        {
            email: "",
            password: "",

        }
    )

    const [user, setUser] = useState<UserLogin>(
        {
            email: "",
            password: ""
        }
    )


    const [notified, notify] = useState<string>("");

    const setPassword = async (password: string) => {
        setUser({
            ...user, password: encodeURIComponent(password)
        })
    }


    const SignUp = (user: {email: string, password: string}) => {
        const result = new AuthUser({email: user.email, password: user.password}).getUserIFExit() as any
        result.then(
            (promies: any) => {
                promies.json().then(
                    (result: any) => {
                        const {validate, identity} = result
                        if(validate) {
                            router.push(`/profile/Admin`)
                        }
                        else {
                            notify('Inavlid username or password')
                            console.log('freoeo')
                        }
                    }
                )

            })

    }


    function enable(switchForm: string) {
    }

    return (
        (
            <div className=' w-full  font-[sans]'>
                <div className=''>
                    <div className='  max-h-[10vh] bg-gradient-to-r from-slate-600 via-purple-900 to-slate-900 mb-10 sm:px-10 flex items-center justify-between  sm:justify-around'>
                        <h1 className='text-blue sm:text-4xl text-white mt-10 font-[sans]'>Engpy</h1>
                        <div className='flex space-x-3 items-center mt-10'>
                            <h2 className='sm:block hidden text-slate-100 font-[sans] sm:text[10px]'>
                                Already have account?
                            </h2>
                            <button className='text-slate-300 bg-slate-950 rounded-md px-3 py-1' >
                                Log in
                            </button>
                        </div>
                    </div>
                </div>

                <div className='min-h-screen mt-[-30px] circular-gradient flex  justify-center   '>
                    <div className=' rounded-md  flex text-center items-center justify-around w-full '>
                        <div className='lg:flex sm:mt-0 mt-10 flex-row justify-around w-[80%] items-center '>
                            <div >
                                <div className='bg-gradient-to-r from-zinc-100 via-zinc-200 to-slate-100 space-y-2 rounded-md '>
                                    <h1 className=' lg:text-4xl w-full py-3 px-3 text-slate-500 mb-5 text-[16px]'>Get Started On Engpy Today </h1>
                                </div>
                                <button onClick={(() => SignUp(user))} className='w-full bg-gradient-to-r text-[18px]  from-purple-100 via-slate-200 to-zinc-300 rounded-[5px] h-10 text-center hover:animate-plus hover:translate-y-1 duration-500 text-slate-500  '><Link href={'/signup'} className='flex item-center justify-center space-x-5 w-full '> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg ><h1>Signup</h1></Link></button>
                            </div>
                            <ul className='rounded-xl bg-white flex justify-center  shadow-2xl py-4 px-4 rounded-sm'>
                                <div className=' space-y-5 flex-row  sm:w-[450px] w-full text-left  justify-between mb-10 '>
                                    {notified.length ? <h1 className=' text-center text-red-500 text-xl'>{notified}<hr /></h1> : ''}
                                    {/* </div> */}
                                    <div>
                                        <label className='text-slate-500'>Email or Username <span className='text-red'>*</span></label>
                                        <input onChange={(source) => {setUser({...user, email: source.target.value})}} className=' w-full h-10  rounded-sm border focus:outline-none' />
                                    </div>


                                    <div>
                                        <label className='text-slate-500'>Email or Username <span className='text-red'>*</span></label>
                                        <input onChange={(source) => {setPassword(source.target.value)}} className='w-full h-10 border rounded-sm focus:outline-none' type='password' />
                                    </div>

                                    <div className='flex space-x-3'>
                                        <button className='w-[90%]  border  rounded-[5px] h-10 text-center hover:animate-plus hover:translate-y-1 duration-500 text-slate-500'> OTP </button>
                                        <button className='w-[90%] border rounded-[5px] h-10 text-center hover:animate-plus hover:translate-y-1 duration-500 text-slate-500'> Login </button>
                                    </div>
                                    <div className='flex-row items-center space-y-3'>
                                        <button className='w-full  border  rounded-[5px] h-10 text-center hover:animate-plus hover:translate-y-1 duration-500  text-slate-500'> Google </button>
                                        <button className='w-full border rounded-[5px] h-10 text-center hover:animate-plus hover:translate-y-1 duration-500  text-slate-500'> Github </button>
                                    </div>


                                    <button onClick={(() => SignUp(user))} className='w-full bg-gradient-to-r text-slate-500 from-purple-800 via-slate-900 to-purple-900 rounded-[5px] h-10 text-center hover:animate-plus hover:translate-y-1 duration-500 '> Login </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        ))


}