'use client'
import React, {Suspense, useEffect, useState} from 'react';
import '@/styles/globals.css'
import Link from 'next/link'
import Image from "next/image"
import sec from "../public/asset/sec.png"
import {Model} from '@/types/componentBased/types';



export function Card({img, heading, content, Link, LinkContent}: Model) {
    return (
        <li className='sm:w-[450px] px-10 flex-row text-center shadow-lg shadow-black-500/50 px-10 py-10 rounded-lg w-full  mt-9 sm:mt-5'>
            <div className='flex shadow_down justify-around roundeShapes'>
                {/*  <Image src={img} className='flex items-center justify-around h-[180px] circleShape object-cover' width={"200"} height={0} />*/}
                <h1 className='text-[16px] text-[white] font-medium bg-slate-900 ml-0 '>{heading}</h1>
            </div>
            <div className='shaow-xl px-2 py-2'>
                <div className='mt-1'>
                    <p className="px-2">
                        <h3 className='text-[14px] text-[white] rounded-xl  py-3 text-left'>{content}</h3>
                    </p >
                </div>
            </div>
        </li>
    )
}


export const Cards: React.FC<Model> = ({children}) => {

    return (
        <div className='flex items-center'>
            <ul className={`grid grid-cols-2 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-scroll hs inset-x-0 bottom-0 flex justify-center bg-gradient-to-r from-slate-900 to via-bg-slate-950 to-bg-slate-800 sm:px-[100px] shadow-xl flex-row items-center rounded-xl`}>
                {children}
            </ul>
        </div>
    )
}

export const CardPurple: React.FC<Model> = ({heading, content, imgs, button}) => {
    return (
        <div className='flex-row bg-gradient-r from-bg-slate-900  via-slate-900 to-slate-950 items-center rounded-2xl shadow-2xl w-full sm:w-[950px]  py-[50px] px-[40px] '>
            <div className='block sm:flex items-center  px-0 sm:px-3 py-2 text-purple-800'>
                <div>
                    <h1 className='text-white w-[100%] text-[30px] font-black'>{heading}</h1>
                    <hr className='w-[25px] bg-gradient-r from-orange-100 via-orange-300 to-purple-200' />
                    <h6 className='text-[16px] mt-10 text-white'>{content}</h6>
                </div>
                <div>{imgs}</div>
            </div>
        </div>
    )
}

export const PurpleCard: React.FC<Model> = ({children}) => {
    return (
        <div>
            <ul className='w-full space-y-10'>
                {children}
            </ul>
        </div>
    )
}
