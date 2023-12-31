'use client'

import {CodeEditor, CodeSample} from "@/src/app/components/Editor/codeEditor"

export default function Addition() {
    return <div className="font-[apple, sans-serif,] sm:px-[50px] h-[100vh] h-screen dark:bg-slate-900 bg-white dark:text-[inherit] text-slate-900 text-sm mt-20 rounded-md hs-s ">
        <div className='rounded-md px-4 py-4 dark:border-slate-800 border-slate-100 border'>
            <div className='mt-5 '>
                <h1 className='text-2xl text-violet-800 dark:text-slate-500  mt-2 text-center '>Additions Operations </h1>
            </div>
            <div className=''>
                <div className='mt-5 dark:text-white text-slate-900 text-sm space-y-10'>
                    <div>

                        <div className='text-[14px] dark:text-white text-slate-900 text-sm mt-2 mx-1 mx-3 border py-6 px-2 dark:border-slate-800 border-slate-100 rounded-md'>
                            <p className='text-[14px]'>
                                In Engpy, the addition operation is a fundermental operation that allows you to combine two Expr objects, resulting in a new Expr object representing the sum of the original expressions. This operation is particularly useful for building and manipulating complex mathematical expressions or equations.
                            </p>
                            <h1 className='text-2xl mt-5'>Syntax</h1>
                            <hr className='border-slate-200 dark:border-slate-800 ' />
                            <p className='mt-5 space-y-3'>
                                The syntax for adding Expr objects is straightforward:
                                <li> <span className='text-purple-500'> {<span className="text-purple-800">{`<left:: type>`}</span>}  :: {<span className="text-blue-800">{`<Expr Object>`}</span>} </span>  +  <span className="text-purple-800">{`<right:: type>`}</span> {<span className="text-blue-800">{`< String Object >`}</span>}  </li>
                                <li> {"Let expr_1 = Expr('3x - 5y')"} </li>
                                <li>{" Let expr_2 = '5y' "}</li>
                                <p className='border dark:border-slate-900 border-slate-100 rounded-md'>
                                    <CodeSample
                                        text=
                                        {`>>> expr_1 = '3x-5y' \n>>> expr_2 = '5y' \n \n>>># Implement Addtion Operation \n>>>overall = expr_1 + expr_2 \n >>> overall \n3x `} width={'100%'} />
                                </p>
                            </p>


                            <p className='mt-5 space-y-3'>
                                The syntax for adding Expr objects using Expression Local Methods:
                                <li> <span className='text-purple-500'> {<span className="text-purple-800">{`<left:: type>`}</span>}  :: {<span className="text-blue-800">{`<Expr Object>`}</span>} </span>  +  <span className="text-purple-800">{`<right:: type>`}</span> {<span className="text-blue-800">{`< String Object >`}</span>}  </li>
                                <li> {"Let expr_1 = Expr('3x - 5y')"} </li>
                                <li> {"Let expr_2 = '5y'"} </li>
                                <p className='border dark:border-slate-900 border-slate-100 rounded-md'>
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