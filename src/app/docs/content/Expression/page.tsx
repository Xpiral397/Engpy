'use client'
import React, {useState} from "react"

export default function getsStarted() {
    return <div className="  h-[100vh] hs-s py-10 px-10 border-zinc-950 bg-slate-900 w-full text-slate-100">
        <div>
            <h1 className='text-2xl text-white mt-10'>Expression Object </h1>
        </div>
        <div className=''>
            <h1 className='text-white mt-5' >This page will guide you through how Expression Addition works workes</h1>
            <hr className='divide-y mt-10 ' />

            {/* <div className=''>
                <h1 className='text-[13px] mt-5'>
                    <h1 className='text-[20px]'> Introduction to EngPy Expression Object : Empowering Symbolic Mathematics in Python</h1>
                    <p className='mx-2 mt-2'>EngPy is a powerful Python library tailored to empower users with the tools for symbolic mathematics, algebraic manipulations, and advanced mathematical expression parsing. Whether you're a student, educator, engineer, or researcher, EngPy serves as your reliable companion in the world of mathematical computations and symbolic algebra.
                    </p>
                </h1>
            </div> */}

            <div className=''>
                <h1 className='text-[13px] mt-5'>
                    <h1 className='text-[20px]'>Expression Objects in Symbolic Mathematics:</h1>
                    <p className='mt-2'>
                        Expression objects are fundamental components in the field of symbolic mathematics and computer algebra systems. They serve as data structures that represent mathematical expressions, equations, and functions in a symbolic and human-readable form. Unlike numerical calculations, which yield specific numeric results, expression objects store mathematical relationships as symbols, variables, constants, and operations.
                    </p>
                </h1>
            </div>
        </div>

        <div className='grid grid-cols-3 gap-y-[100px]  gap-x-[100px] mt-5 border-slate-900 rounded py-2 px-3'>
            <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Formatting & Literal
            </div>

            <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Operation
            </div>
            <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Substitution
            </div>
            <div className='py-[100px] px-[0px]hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Equation
            </div>
            <div className='py-[100px] px-[0px]hover:bg-slate-900 duration-300 border-zinc-700  text-center border-[1px] rounded-md '>
                Transformation
            </div>

            <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Calculus
            </div>
            <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Graphs
            </div>
            <div className='py-[100px] px-[0px] hover:bg-slate-900 duration-300  border-zinc-700  text-center border-[1px] rounded-md '>
                Trigonometrics
            </div>
        </div>
    </div>
}


