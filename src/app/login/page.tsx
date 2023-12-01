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
    const [overlay, setoverlay] = useState(false)

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
        setoverlay(e => !e)
        const result = new AuthUser({email: user.email, password: user.password}).getUserIFExit() as any
        result.then(
            (promies: any) => {
                promies.json().then(
                    (result: any) => {
                        const {validate, identity} = result
                        if(validate) {
                            notify('valid username or password')
                            // router.push(`/profile/Admin`)
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
            <div className='relative  w-full  font-[sans]'>
                {
                    overlay ?
                        <div className='absolute  w-full h-full bg-[#0000a001]'>
                            <div className='flex h-[100vh] w-full text-center items-center justify-center'>
                                <div className='overlay bg-white text-purpel-600 extrabold'>
                                    <div className='animate animate-spin'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">  <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" /></svg>
                                    </div>
                                    <h1>`    100</h1> Please wait
                                </div>
                            </div>
                        </div>
                        :
                        <div className=''>

                        </div>
                }
                <div className=''>
                    <div className='  bg-gradient-to-r from-slate-600 via-purple-900 to-slate-900 mb-10 sm:px-10 flex items-center justify-between  sm:justify-around'>
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