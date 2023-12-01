'use client'
import Dots from "@/src/app/components/Designs/dots"
import React from "react"

export default function getsStarted() {
    // const linksrc = globalThis.location.pathname.replace('docs/Loader/content/', "").split('/')
    return <div className="h-[100vh] h-screen bg-white dark:bg-slate-900 mt-20 rounded-md hs-s">
        <div className="rounded-md px-5 py-4 border-zinc-100 dark:border-slate-700 border">
            <h1 className='text-3xl mx-5 font-[sans-serif,apple, os, Helvitica , Cursive] font-medium text-purple-500 dark:text-slate-100 mt-10 text-center  '>Arithemetic Operation </h1>
            <div className='border border-slate-100 dark:border-slate-800 mt-5 rounded px-4 py-4 '>
                <h1 className='text-slate-700 dark:text-white mt-5' >This page will guide you through how operation works in Engpy, Expr objects</h1>
                <hr className='border-slate-200 dark:border-slate-800 ' />

                {/* <div className=''>
                <h1 className='text-[13px] mt-5'>
                    <h1 className='text-[20px]'> Introduction to EngPy Expression Object : Empowering Symbolic Mathematics in Python</h1>
                    <p className='mx-2 mt-2'>EngPy is a powerful Python library tailored to empower users with the tools for symbolic mathematics, algebraic manipulations, and advanced mathematical expression parsing. Whether you're a student, educator, engineer, or researcher, EngPy serves as your reliable companion in the world of mathematical computations and symbolic algebra.
                    </p>
                </h1>
            </div> */}


                <div className=' text-neutral-100 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-[30px]  gap-x-[100px] mt-5 border-slate-900 rounded py-2 px-3'>

                    <div className='dark:hover:bg-slate-800 hover:bg-zinc-200 shadow-2xl py-2 px-2  dark:bg-slate-900  duration-300  dark:border-zinc-700 border-zinc-200  text-center border-[1px] rounded-md '>
                        <div className="flex justify-between">
                            <Dots />
                            <h1 className="text-right text-slate-700">Addition</h1>
                        </div>
                        <hr className="border-slate-800 dark:block hidden" />
                        <div className="border dark:border-slate-800 border-zinc-200 bg-white dark:bg-slate-900 my-1  px-3 py-5 rounded-md dark:text-neutral-200 text-slate-700">
                            <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]"> <h1 className="text-left">Expr class in Engpy supports easy addition between two objects. Combine math expressions effortlessly using +.</h1></h1>
                        </div>
                        <div className="text-slate-700 bg-white  dark:bg-slate-900 text-[14px] rounded-md rounded-md border-slate-800  px-2 py-2 text-neutral-300 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                            <li><a className='dark:text-white text-slate-700' href="#"> Expr Object Addition</a></li>
                            <li><a className='dark:text-white text-slate-700' href="#">Strings to Expr Object</a></li>
                            <li><a className='dark:text-white text-slate-700' href="#">Strings & Expr Objects</a></li>
                            <li><a className='dark:text-white text-slate-700' href="#">DictExpr Fusion </a></li>
                        </div>
                    </div>




                    <div className='shadow-2xl py-2 px-2 dark:hover:bg-slate-800  dark:bg-slate-900 bg-white  hover:bg-zinc-200 duration-300 dark:border-zinc-700 border-zinc-200 text-center border-[1px] rounded-md'>
                        <div className="flex justify-between">
                            <Dots />
                            <h1 className="text-right">Subtraction</h1>
                        </div>
                        <hr className="border-slate-800" />
                        <div className="border dark:border-slate-800 border-zinc-200 bg-white  dark:bg-slate-900 my-1 px-3 py-5 rounded-md dark:text-neutral-200 text-slate-700">
                            <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]">Engpy makes subtraction a breeze! Effortlessly subtract between objects with -.</h1>
                        </div>
                        <div className="text-slate-700 bg-white  dark:bg-slate-900 text-[14px] rounded-md rounded-md border-slate-800 px-2 py-2 text-neutral-300 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                            <li><a className='dark:text-white text-slate-700' href="#">Expr Obj Subtraction</a></li>
                            <li><a className='dark:text-white text-slate-700' href="#">Str from Expr Object</a></li>
                            <li><a className='dark:text-white text-slate-700' href="#">DictExpr Fusion</a></li>
                            <li><a className='dark:text-white text-slate-700' href="#">Inverting Expr Objects</a></li>
                        </div>
                    </div>



                    <div className='shadow-2xl py-2 px-2 dark:hover:bg-slate-800 bg-white hover:bg-zinc-200 dark:bg-slate-900 hover:bg-slate-800 duration-300  dark:border-zinc-700 border-zinc-200  text-center border-[1px] rounded-md'>
                        <div className="flex justify-between">
                            <Dots />
                            <h1 className="text-right text-slate-700">Division</h1>
                        </div>
                        <hr className="border-slate-800" />
                        <div className="border dark:border-slate-800 border-zinc-200 bg-white  dark:bg-slate-900 my-1 px-3 py-5 rounded-md dark:text-neutral-200 text-slate-700">
                            <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]">Engpy makes subtraction a breeze! Effortlessly subtract between objects with -.</h1>
                        </div>
                        <div className="text-slate-700 bg-white  dark:bg-slate-900 text-[14px] rounded-md rounded-md border-slate-800 px-2 py-2 text-neutral-300 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">

                            <li><a className='dark:text-white text-slate-700' href="">Expr Division</a></li>
                            <li><a className='dark:text-white text-slate-700' href="">Long Division</a></li>
                            <li><a className='dark:text-white text-slate-700' href="">Radicals & Roots</a></li>
                            <li><a className='dark:text-white text-slate-700' href="">Complex Expression</a></li>

                        </div>
                    </div>


                    <div className='shadow-2xl py-2 bg-white px-2 dark:hover:bg-slate-800 hover:bg-zinc-200 dark:bg-slate-900 hover:bg-slate-800 duration-300  dark:border-zinc-700 border-zinc-200  text-center border-[1px] rounded-md '>
                        <div className="flex justify-between">
                            <Dots />
                            <h1 className="text-right text-slate-700">Multiplication</h1>
                        </div>
                        <hr className="border-slate-800" />
                        <div className="border dark:border-slate-800 border-zinc-100 bg-white dark:bg-slate-900 my-1 px-3 py-5 rounded-md dark:text-neutral-200 text-slate-700">
                            <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]">Learn everything you need to know about division with Expr Objects and Strings., </h1>
                        </div>
                        <div className="bg-white dark:bg-slate-900 my-1  px-5  py-5 rounded-md dark:text-neutral-200 text-slate-700 rounded-md ">
                            <div className="text-neutral-300 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                                <li><a className='dark:text-white text-slate-700' href="">Expression Multiplication</a></li>
                                <li><a className='dark:text-white text-slate-700'> Handling Parenthesis</a></li>
                                <li><a className='dark:text-white text-slate-700'>Powers Handling</a></li>
                                <li><a className='dark:text-white text-slate-700'>Dynamic Exapansion</a></li>
                            </div>
                        </div>
                    </div>


                    <div className='shadow-2xl py-2 px-2 hover:bg-zinc-200  dark:hover:bg-slate-800 duration-300  border-zinc-700  text-center  rounded-md '>
                        <div className="flex justify-between">
                            <Dots />
                            <h1 className="text-right text-slate-700">Overflow </h1>
                        </div>
                        <div className="border dark:border-slate-800 border-zinc-200 bg-white  dark:bg-slate-900 my-1 px-3 py-5 rounded-md dark:text-neutral-200 text-slate-700">
                            <h1 className="text-left text-[14px] font-[snas-serif, Heltivica, Poppins, apple, os]">Learn hw to customized and define how operation works in engpy with Expr objects;</h1>
                        </div>
                        <hr className="border-slate-800" />

                        <div className="text-[14px] flex flex-wrap text-slate-700 bg-white shadow-2xl dark:bg-slate-900 text-[14px] rounded-md rounded-md border-slate-800 px-2 py-2 text-neutral-300 text-left font-[450] grid sm:grid-cols-1 grid-cols-2 ">
                            <li><a className='dark:text-white text-slate-700'>Additions</a></li>
                            <li><a className='text-slate-700'>Subtraction</a></li>
                            <li><a className='text-slate-700'>Mutiplication </a></li>
                            <li><a className='text-slate-700'>Divisions</a></li>


                        </div>
                    </div>

                </div>
            </div>
        </div >
    </div >

}