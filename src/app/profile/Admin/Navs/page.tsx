'use client'

import {UserViatalLoginAttribute, OptionProfile} from "@/types/componentBased/types"
import engpy from '@/public/engpy.png'
import Image from 'next/image'
import axios from "axios"
import {useState, useEffect} from "react"
import {ArrowDownIcon, ListBulletIcon} from "@/src/app/components/icons/iconsSvg"





export function AdminNavs({user}: {user: any}) {



    return (<div>
        <nav className='z-3 w-full text-white display flex bg-zinc-800 border-b-[.1px] py-2  border-zinc-700 justify-between px-2 '>
            <div className="flex w-full space-x-5 lg:space-x-10">
                <div className=''>
                    <div className="flex">
                        <h1 className="text-2xl text-blue-900 flex text-[25px]  ">E <h2 className="text-purple-900 text-[20px]  font-[cursive] shadow-md ">-ngpy </h2></h1>
                        {/* <Image className="animate-spin-slow duration-rotate-300 from rounded-full py-3 px-3 " alt='engpy' height={50} width={50} src={engpy.src} /> */}
                        {/* <h1 className=" absolute top-[55px]  text-2xl left-[70px] font-balck text-zinc-900 ">Engpy</h1> */}
                    </div>
                </div>
                <ul className="flex items-center space-x-5 justify-between ">
                    <li className="text-[14px] text-center items-center  flex space-x-2 rounded-md "><span>Project Manager</span> <ArrowDownIcon className='h-2 w-[10px]' /></li>
                    <li className="text-[14px] text-center  items-center flex space-x-2  rounded-md "><span>Manage project</span> <ArrowDownIcon className='h-2 w-[10px]' /></li>
                    <li className="text-[14px] text-center  items-center  flex space-x-2 rounded-md "> <span>Access Project </span><ArrowDownIcon className='h-2 w-[10px]' /></li>
                </ul>
            </div>
            <ul className='flex items-center space-x-3'>
                <li className="text-[14px] border px-1 py-1 rounded-md flex space-x-2 "><span className="no_wrap">All Project   </span><ArrowDownIcon className='h-2 w-[10px]' /></li>
                <li>
                    <div className=' flex items-center rounded-full border  justify-around rounded-md'>
                        <div className="hover:block  rounded-full px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className='h-9 flex w-full px-2  justify-around rounded-md bg-slate-700 text-slate-100 items-center '>
                            <h1 className='px-2  text-[10px] font-[300px] text-slate-100 '>{(user.username)}</h1>
                            <ArrowDownIcon className='h-2 w-[10px]' />
                        </div>
                    </div>
                </li>
            </ul>
        </nav >
    </div>)
}


export function AdminService(user: any) {


    return <div className='z-3 bg-zinc-800 text-white h-[50px] shadow-md font-sans w-full bg-white display flex  border-b-[.1px] border-zinc-900  text-white justify-between  '>
        <div className="flex items-center w-full space-x-5 justify-between">
            <div className=" flex  items-center w-[50%] space-x-10 justify-between">
                <ul className="w-full items-center flex items-center space-x-5">
                    <li className=" flex border bg-slate-700 px-3 text-white h-full py-1 items-center space-x-10 justify-between text-[14px] font-sans  text-center flex space-x-10 rounded-md :text-purple-900 hover:font-black  hover:translate-y-[0.5px] flex ">
                        <span className=" flex justify-between  space-x-10">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3.75 3A1.75 1.75 0 002 4.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-8.5A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM10 8a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 0110 8z" clipRule="evenodd" />
                            </svg>
                            <span>Project</span>
                        </span>
                        <ListBulletIcon className='h-8 w-9' />
                    </li>
                </ul>
                <ul className="flex font-tune  items-center space-x-10 justify-between ">
                    <li className="text-[13px]  hover:font-medium text-center flex space-x-2  hover:border-b-[2px] border-slate-900 px-2 font-custome "><span className="no_wrap py-2  text-white">DataTypes</span></li>
                    <li className="text-[13px]   hover:font-medium  text-center flex space-x-2  hover:border-b-[2px] border-purple-900 px-2  font-medium"><span className="no_wrap py-2 font-medium text-white">Request</span></li>
                    <li className="text-[13px] hover:font-medium  text-center flex space-x-2  hover:border-b-[2px]  border-purple-900 px-2  "> <span className="no_wrap py-2  text-white">Overview </span></li>
                    <li className="text-[13px]  hover:font-medium  text-center flex space-x-2 hover:border-b-[2px]  border-purple-900 px-2  "> <span className="no_wrap py-2  text-white">Switch</span></li>
                    <li className="text-[13px]  hover:font-medium  text-center flex space-x-2 hover:border-b-[2px]  border-purple-900 px-2  "> <span className="no_wrap py-2  text-white">Report</span></li>
                    <li className="text-[13px]   hover:font-medium  text-center flex space-x-2 hover:border-b-[2px]  border-purple-900 px-2  "> <span className="no_wrap py-2 text-white">Documentation</span></li>
                </ul>
            </div>
        </div>
        <ul className='flex items-center space-x-3'>
            <li>
                <div className=' flex space-x-10 items-center h-full py-2  rounded-full border  justify-around rounded-md'>
                    <div className="hover:block  rounded-full px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="hover:block  rounded-full px-1">
                        <div className="hover:block  px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div >
}