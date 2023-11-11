'use client'

import LineGradient from "@/src/app/components/Designs/Gradients"
import {CodeEditor, CodeSample} from "@/src/app/components/Editor/codeEditor"

export default function getsStarted() {
    return <div className="sm:px-[50px] hs-s h-[100ch] bg-slate-900 mt-20 rounded-md ">
        <div className='rounded-md px-4 py-4 border-slate-800 border'>
            <div className='mt-5 '>
                <h1 className='text-2xl text-white mt-2'>Multiplication With Expression Class </h1>
            </div>
            <div className=''>
                <h1 className='text-white mt-5' >This page will guide you through how Expression Mutiplication Operation </h1>
                <hr className='divide-y mt-10 ' />

                <div className='mt-5 text-white space-y-10'>
                    <div>
                        <h1 className='text-2xl'>Multiplication Operation</h1>
                        <div className='text-[14px] text-white mt-2 mx-1 mx-3 border py-6 px-2 border-slate-800 rounded-md'>
                            <p>
                                In Engpy, the addition operation is a fundamental operation that allows you to multiply two Expr objects or string  , resulting in a new Expr object representing the sum of the original expressions. This operation is particularly useful for building and manipulating complex mathematical expressions or equations.
                            </p>
                            <h1 className='text-2xl mt-5'>Syntax</h1>
                            <hr />
                            <p className='mt-5 space-y-3'>
                                The syntax for adding Expr objects is straightforward:
                                <li> <span className='text-purple-500'> {<span className="text-purple-800">{`<left:: type>`}</span>}  :: {<span className="text-blue-800">{`<Expr Object>`}</span>} </span>  -  <span className="text-purple-800">{`<right:: type>`}</span> {<span className="text-blue-800">{`< String Object >`}</span>}  </li>
                                <li> <span className='text-purple-500'> {<span className="text-purple-800">{`<left:: type>`}</span>}  :: {<span className="text-blue-800">{`<Expr Object>`}</span>} </span>  -  <span className="text-purple-800">{`<right:: type>`}</span> {<span className="text-blue-800">{`< Expr Object >`}</span>}  </li>
                                <div className="space-y-[100px]">
                                    <div className="flex space-x-5">
                                        <LineGradient h={"100"} />
                                        <div>
                                            Exmaple 1
                                            <li> Let expr_1 = {`(3x - 5y)`} </li>
                                            <li> Let expr_2 = {`'5y'`} </li>

                                            Convert One Of  the expression to: Expression Object

                                            <li> Let expr_1 = {`Expr('3x - 5y')`} </li>
                                            <li> Let expr_2 = {`5y`} </li>
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
                                            Exmaple 2:
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