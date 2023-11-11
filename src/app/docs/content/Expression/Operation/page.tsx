'use client'
import React from "react"

export default function getsStarted() {
    // const linksrc = globalThis.location.pathname.replace('docs/Loader/content/', "").split('/')
    return <div className="  h-[100vh] hs-s py-10 px-10 border-zinc-950   bg-slate-900 w-full text-slate-100">
        <div>
            <h1 className='text-2xl text-white mt-10'>Operation Object </h1>
        </div>
        <div className='border border-slate-700 mt-5 rounded px-4 py-4 '>
            <h1 className='text-white mt-5' >This page will guide you through how Operation works</h1>
            <hr className='divide-y mt-3 ' />

            {/* <div className=''>
                <h1 className='text-[13px] mt-5'>
                    <h1 className='text-[20px]'> Introduction to EngPy Expression Object : Empowering Symbolic Mathematics in Python</h1>
                    <p className='mx-2 mt-2'>EngPy is a powerful Python library tailored to empower users with the tools for symbolic mathematics, algebraic manipulations, and advanced mathematical expression parsing. Whether you're a student, educator, engineer, or researcher, EngPy serves as your reliable companion in the world of mathematical computations and symbolic algebra.
                    </p>
                </h1>
            </div> */}


            <div className='grid grid-cols-3 gap-y-[30px]  gap-x-[100px] mt-5 border-slate-900 rounded py-2 px-3'>
                <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                    Addition
                </div>

                <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                    Subtraction
                </div>
                <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                    Division
                </div>
                <div className='py-[100px] px-[0px]hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                    Mutiplication & Scope
                </div>
            </div>
        </div>
    </div>
}