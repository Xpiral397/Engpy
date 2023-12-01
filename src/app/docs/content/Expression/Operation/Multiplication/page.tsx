'use client'

import LineGradient from "@/src/app/components/Designs/Gradients"
import {CodeEditor, CodeSample} from "@/src/app/components/Editor/codeEditor"
import {BiErrorAlt} from "react-icons/bi"

export default function Multiplication() {
    return <div className="sm:px-[50px] hs-s h-[100ch] bg-white dark:bg-slate-900 mt-20 rounded-md ">
        <div className='rounded-md px-4 py-4 border-slate-800 border'>
            <div className='mt-5 '>
                <h1 className='text-2xl dark:text-white text-slate-700 text-slate-700mt-2'>Multiplication With Expression Class </h1>
            </div>
            <div className=''>
                <h1 className='dark:text-white text-slate-700 mt-5' >This page will guide you through how expression mutiplication Operation works </h1>
                <hr className='divide-y mt-10 ' />

                <div className='mt-5 dark:text-white text-slate-700 space-y-10'>
                    <div>
                        <h1 className='text-2xl'>Multiplication Operation Using Operand Symbol In A String:</h1>
                        <div className='text-[14px] dark:text-white text-slate-700 mt-2 mx-1 mx-3 border py-6 px-2 border-slate-800 rounded-md'>
                            <p className='dark:bg-zinc-500 bg-fuchsia-100 font-medium  items-center  flex space-x-3  p-2 rounded-md'>
                                <div className="font-black text-yellow-800"><BiErrorAlt /></div>
                                <h1>
                                    Use Operand * to muitiply two native expression together in a  string
                                </h1>
                            </p>
                            <h1 className='text-2xl mt-5'>Syntax & Usages</h1>
                            <hr />
                            <div className='text-[18px] mt-5 space-y-3'>
                                The syntax for adding Expr objects is straightforward:
                                <h1>Suppose we have (3x -5y)(5y-2x), we can ingest it into expression base class directly  </h1>
                                <div className="">
                                    <div className="mt-5 ">
                                        <div className="px-2 ">
                                            <span>Sample:{"(3x -5y)(5y-2x)"}</span>
                                            <li> Let expr_1 = {`(3x - 5y)`} </li>
                                            <li> Let expr_2 = {`'5y - 2x'`} </li>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>Using Operator *:</h1>
                                        <div className="mx-10 mt-2 border-l border-slate-700 rounded-md space-y-2 space-x-5 ">
                                            <h1>Turn each one of  the the expreesion to Expr Object </h1>
                                            <div>
                                                <li> Let expr_1 = {`Expr('3x - 5y')`} </li>
                                                <li> Let expr_2 = {`Expr('5y -2x ')`} </li>
                                                <p className='border border-slate-900 rounded-md'>
                                                    <CodeSample
                                                        text=
                                                        {`expr_1 = '3x-5y' \nexpr_2 = '5y' \n \n# Implement Addtion Operation \nAddtion = expr_1 * expr_2 `} width={'100%'} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="">
                                    <div className="mt-5 ">
                                        <div className="px-2 ">
                                            <h1>Example 1:</h1>
                                            <li> Let expr_1 = {`(3x - 5y)`} </li>
                                            <li> Let expr_2 = {`'5y'`} </li>
                                        </div>
                                    </div>
                                    <div>
                                        <h1> Convert One Of  the expression to: Expression Object</h1>
                                        <div className="mx-10 mt-2 border-l border-slate-700 rounded-md space-y-2 space-x-5 ">
                                            <div>
                                                <li> Let expr_1 = {`Expr('3x - 5y')`} </li>
                                                <li> Let expr_2 = {`5y`} </li>
                                                <p className='border border-slate-900 rounded-md'>
                                                    <CodeSample
                                                        text=
                                                        {`expr_1 = '3x-5y' \nexpr_2 = '5y' \n \n# Implement Addtion Operation \nAddtion = expr_1 * expr_2 `} width={'100%'} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="">
                                    <div className="mt-5 ">
                                        <div className="px-2 ">
                                            <h1>Example 1:</h1>
                                            <li> Let expr_1 = {`(3x - 5y)`} </li>
                                            <li> Let expr_2 = {`'5y'`} </li>
                                        </div>
                                    </div>
                                    <div>
                                        <h1> Convert One Of  the expression to: Expression Object</h1>
                                        <div className="mx-10 mt-2 border-l border-slate-700 rounded-md space-y-2 space-x-5 ">
                                            <div>
                                                <li> Let expr_1 = {`Expr('3x - 5y')`} </li>
                                                <li> Let expr_2 = {`5y`} </li>
                                                <p className='border border-slate-900 rounded-md'>
                                                    <CodeSample
                                                        text=
                                                        {`expr_1 = '3x-5y' \nexpr_2 = '5y' \n \n# Implement Addtion Operation \nAddtion = expr_1 * expr_2 `} width={'100%'} />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className=''></div>

        </div>
    </div >


}