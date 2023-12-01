'use client'
import React, {useState} from "react"

export default function getsStarted() {
    return <div className="mt-10  h-[100vh] hs-s py-10 px-10 border border-zinc-200 dark:border-zinc-950 bg-white dark:bg-slate-900 w-full text-orange-200">
        <div className="border border-slate-800 py-4 px-4 ">
            <div>
                <h1 className='text-2xl dark:text-white text-slate-800 mt-10'>Expression Object </h1>
            </div>
            <div className=''>
                <h1 className='dark:text-white text-slate-800 mt-5' >This page will guide you through how Expression Addition works workes</h1>
                <hr className='divide-y mt-10 ' />

                {/* <div className=''>
                
                <h1 className='text-[13px] mt-5'>
                    <h1 className='text-[20px]'> Introduction to EngPy Expression Object : Empowering Symbolic Mathematics in Python</h1>
                    <p className='mx-2 mt-2'>EngPy is a powerful Python library tailored to empower users with the tools for symbolic mathematics, algebraic manipulations, and advanced mathematical expression parsing. Whether you're a student, educator, engineer, or researcher, EngPy serves as your reliable companion in the world of mathematical computations and symbolic algebra.
                    </p>
                </h1>
            </div> */}

                <div className=''>
                    <h1 className='text-[13px] mt-5 dark:text-white text-slate-800 mt-5'>
                        <h1 className='text-[20px]'>Expression Objects in Symbolic Mathematics:</h1>
                        <p className='mt-2 '>
                            Expression objects are fundamental components in the field of symbolic mathematics and computer algebra systems. They serve as data structures that represent mathematical expressions, equations, and functions in a symbolic and human-readable form. Unlike numerical calculations, which yield specific numeric results, expression objects store mathematical relationships as symbols, variables, constants, and operations.
                        </p>
                    </h1>
                </div>
            </div>

            <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1  gap-y-[80px]  gap-x-[80px] mt-5 border-slate-900 rounded py-2 px-3'>


                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Operations</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>


                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Substitution</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>

                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Equation</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>



                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Transformation</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>

                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Calculus</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>

                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Graphing</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>
                <div className='shadow-2xl py-2 px-2 dark:bg-slate-900 hover:bg-neutral-300 hover:dark:bg-slate-800 duration-300  border-zinc-100 dark:border-zinc-700  text-center border-[1px] rounded-md '>
                    <div className="flex items-center justify-between px-2">
                        <div className="animate animate-spin h-5 w-5 rounded-full bg-gradient-to-r from-purple-800 dark:from-amber-500 dark:via-slate-700 via-violet-300  dark:to-slate-800 to-purple-100 "></div>
                        <h1 className="dark:text-neutral-100 dark:text-bold text-violet-800 font-medium font-[sans-serif, Helvitica] text-right -mx-2">Trigonometrics</h1>
                    </div>
                    <hr className="dark:border-slate-800 border-neutral-100" />
                    <div className="border border-neutral-200 dark:border-slate-800 bg-neutral-100 dark:bg-slate-900 my-1  px-3 py-5 rounded-md text-neutral-900 dark:text-neutral-200">
                        <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Learning everything about Expr object operations manipulation and explicit notation operation computation in engpy</h1></h1>
                    </div>
                    <div className="  bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-slate-800 dark:to-slate-900;  text-[14px] border rounded-md rounded-md dark:border-slate-800 border-neutral-200   px-2 py-2 dark:text-neutral-300 text-slate-800 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                        <li><a className='hover:text-purple-900 underline' href="#">Addition</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Subtraction</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Mutiplication</a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Division </a></li>
                        <li><a className='hover:text-purple-900 underline' href="#">Symbol Computations</a></li>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


