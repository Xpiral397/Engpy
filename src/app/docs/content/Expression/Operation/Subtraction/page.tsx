'use client'

import LineGradient from "@/src/app/components/Designs/Gradients"
import {CodeEditor, CodeSample} from "@/src/app/components/Editor/codeEditor"

export default function Subtraction() {
    return <div className="sm:px-[50px] hs-s h-[100ch] bg-white dark:bg-slate-900 mt-20 rounded-md tex-xl ">
        <div className='rounded-md px-4 py-4  border-slate-900 dark:border-slate-800 border'>

            <div className=''>

                <div className='mt-5 text-white space-y-10'>
                    <div>
                        <h1 className='text-2xl dark:text-slate-700 text-violet-500 flex justify-center text-center  mt-5 mb-5  '>Subtraction Operation</h1>
                        <div className='text-[14px] text-white  mx-1 mx-3 border py-6 px-2 border-slate-800 rounded-md'>
                            <p className='dark:text-slate-200 text-slate-700'>
                                In Engpy, the subtraction operation is a fundamental operation that allows you to combine two Expr objects, resulting in a new Expr object representing the sum of the original expressions. This operation is particularly useful for building and manipulating complex mathematical expressions or equations.
                            </p>

                            <h1 className='text-2xl mt-5 '>Syntax</h1>
                            <hr className='border-slate-200 dark:border-slate-800' />
                            <p className='mt-5 space-y-3 tetx-slate-700 dark:text-white'>
                                <h1>Expr Object  Subtraction</h1>
                                <div className="space-y-[100px]">
                                    <div className="flex space-x-5">
                                        <LineGradient h={"100"} />
                                        <div>
                                            Exmaple 1
                                            <li> Let expr_1 = {`Expr('3x - 5y')`} </li>
                                            <li> Let expr_2 = {`'5y'`} </li>
                                            <p className='border border-slate-900 rounded-md'>
                                                <CodeSample
                                                    text=
                                                    {`expr_1 = '3x-5y' \nexpr_2 = '5y' \n \n# Implement Addtion Operation \nAddtion = expr_1 + expr_2 `} width={'100%'} />
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-5">
                                        <LineGradient h={"100"} />
                                        <div className="mx-2">
                                            <span>Exmaple 2</span>
                                            <li> Let expr_1 = {`Expr('3x - 5y')`} </li>
                                            <li> Let expr_2 = {`'5y'`} </li>
                                            <p className='border border-slate-900 rounded-md'>
                                                <CodeSample
                                                    text=
                                                    {`expr_1 = '3x-5y' \nexpr_2 = '5y' \n \n# Implement Addtion Operation \nAddtion = expr_1 + expr_2 `} width={'100%'} />
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </p>
                        </div>
                    </div>



                    <div className=''></div>

                </div>
            </div>
        </div >
    </div>

}