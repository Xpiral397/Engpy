'use client'

import {CodeEditor, CodeSample} from "@/src/app/components/Editor/codeEditor"

export default function Division() {
    return <div className="sm:px-[50px] h-[100vh] h-screen bg-slate-900 mt-5 rounded-md ">
        <div className='rounded-md px-4 py-4 border-slate-800 border'>
            <div className='mt-5 '>
                <h1 className='text-2xl text-purple-800 dark:text-white mt-2'>Division With Expression Class </h1>
            </div>
            <div className=''>
                <h1 className='text-slate-900 dark:text-white mt-5' >This page will guide you through how Expression Mutiplications  Operation works works</h1>
                <hr className='border-slate-200 dark:border-slate-800 ' />

                <div className='mt-5 text-white space-y-10'>
                    <div>
                        <h1 className='text-2xl'>Mutiplication Operation</h1>
                        <div className='text-[14px] text-white mt-2 mx-1 mx-3 border py-6 px-2 border-slate-800 rounded-md'>
                            <p>
                                In Engpy, the addition operation is a fundamental operation that allows you to combine two Expr objects, resulting in a new Expr object representing the sum of the original expressions. This operation is particularly useful for building and manipulating complex mathematical expressions or equations.
                            </p>
                            <h1 className='text-2xl mt-5'>Syntax</h1>
                            <hr className='border-slate-200 dark:border-slate-800 ' />
                            <p className='mt-5 space-y-3'>
                                The syntax for adding Expr objects is straightforward:
                                <li> <span className='text-purple-500'> {<span className="text-purple-800">{`<left:: type>`}</span>}  :: {<span className="text-blue-800">{`<Expr Object>`}</span>} </span>  +  <span className="text-purple-800">{`<right:: type>`}</span> {<span className="text-blue-800">{`< String Object >`}</span>}  </li>
                                <li> Let expr_1 = Expr('3x - 5y') </li>
                                <li> Let expr_2 = '5y' </li>
                                <p className='border border-slate-900 rounded-md'>
                                    <CodeSample
                                        text=
                                        {`>>> expr_1 = '3x-5y' \n>>> expr_2 = '5y' \n \n>>># Implement Addtion Operation \n>>>overall = expr_1 + expr_2 \n >>> overall \n3x `} width={'100%'} />
                                </p>
                            </p>


                            <p className='mt-5 space-y-3'>
                                The syntax for adding Expr objects using Expression Local Methods:
                                <li> <span className='text-purple-500'> {<span className="text-purple-800">{`<left:: type>`}</span>}  :: {<span className="text-blue-800">{`<Expr Object>`}</span>} </span>  +  <span className="text-purple-800">{`<right:: type>`}</span> {<span className="text-blue-800">{`< String Object >`}</span>}  </li>
                                <li> Let expr_1 = Expr('3x - 5y') </li>
                                <li> Let expr_2 = '5y' </li>
                                <p className='border border-slate-900 rounded-md'>
                                    <CodeSample
                                        text=
                                        {`>>> expr_1 = Expr('3x-5y') \n>>> expr_2 = '5y' \n \n>>># Implement Addtion Operation \n>>>overall = expr_1.add(expr_2) \n>>> overall \n3x `} width={'100%'} />
                                </p>
                            </p>
                        </div>
                    </div>



                    <div className=''></div>

                </div>
            </div>
        </div >
    </div>

}