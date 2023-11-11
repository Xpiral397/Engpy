import React from 'react'
import {AiFillFolderAdd} from 'react-icons/ai'
import {BarCharts} from '../Charts/BarcChar.tsx/chat'


export function DeployCard({deployName}: {deployName?: string}) {
    return (
        <div className='bg-white shadow-lg rounded-md w-[450px] justify-center text-center items-center mt-1'>
            <div className='rounded-md text-white '>
                <div className='text-slate-900 w-full bg-zinc-800'>
                    <BarCharts />
                </div>
            </div>
            <div className='py-2 bg-slate-800 border rounded-md '>
                <div className='py-1 rounded-md h-10  text-white flex px-3 items-center justify-between w-full' >
                    <div className='text-white font-sans text-[12px]  '>
                        <span className='bg-green-900 h-full py-1 px-1 rounded-[1px] mt-2'>Lead: <span className='mr-4 text-slate-300'>Olamide</span></span>
                        {/* <span className='bg-green-900 h-full py-1 px-1 rounded-[1px] mt-2'>Lead: <span className='mr-4 text-slate-300'>Olamide</span></span> */}
                    </div>
                    <h1 className='text-[10px] h-full font-bold text-black py-2 px-2  ml-10 rounded-sm'>{deployName}</h1>
                    {/* <div className='flex w-full justify-between items-center text-white text-xl'>

                    {/* <AiFillFolderAdd /> */}
                    {/* </div> */}
                </div>

                <div className='grid grid-cols-2 bg-slate-700 py-4 px-4 gap-y-4 item-center  rounded-md  '>

                    <div className='  px-3 text-white flex justify-between w-full space-x-5' >
                        <span className='text-[10px] text-slate-100'>Complete</span>
                        <span className='text-[10px] text-slate-100  px-1 rounded-sm w-[30px] '> False </span>
                    </div>
                    <div className='  px-3 text-white flex justify-between w-full space-x-5' >
                        <span className='text-[10px] text-slate-100'>Status</span>
                        <span className='text-[10px] text-slate-100 text-[10px] text-slate-900  rounded-sm  w-[30px]'>Active</span>
                    </div>
                    <div className='  px-3 text-white flex justify-between w-full space-x-5' >
                        <span className='text-[10px] text-slate-100'>Team</span>
                        <span className='text-[10px] text-[10px] text-slate-100  px-1 rounded-sm  w-[35px]'>Topic</span>
                    </div>
                    <div className='  px-3 text-white flex justify-between w-full space-x-5' >
                        <span className='text-[10px] text-slate-100'>Done </span>
                        <span className='text-[10px] text-[10px] text-slate-100  px-1 rounded-sm w-[35px]'>44/40</span>
                    </div>

                </div>




                <div className='flex w-full text-white font-medium space-x-2  '>
                    <h1 className='w-full py-2 px-2 bg-slate-800 rounded text-[10px]'> Request Deployment </h1>
                    <h1 className='w-full py-2 px-2 bg-slate-800 rounded text-[10px]'> Explore Deployment </h1>
                    <h1 className='w-full py-2 px-2 bg-slate-800 rounded text-[10px]'> More...</h1>
                </div>
            </div>
        </div>)

}