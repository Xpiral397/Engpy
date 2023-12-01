import React from 'react'
import Addition from './content/Expression/Operation/Addition/page'
import Subtraction from './content/Expression/Operation/Subtraction/page'
import Multiplication from './content/Expression/Operation/Multiplication/page'


export default function page() {
    return (
        <div className='px-1 hs-s max-h-[100vh]'>
            <div className='border border-[1px] mt-0 border-slate-950 border px-1  rounded-md '>
                <div className='flex flex-col space-y-[100px]'>
                    <Addition />
                    <Subtraction />
                    <Multiplication />
                </div>
            </div>
        </div>
    )
}
