'use client'
import React, {useState} from 'react'
import EngpyLogo from '../EngpyLogo'
import {ListBulletIcon, CloseIcon} from '../icons/iconsSvg'
import Link from 'next/link'
import '@/styles/globals.css';
export default function Navbar() {
    const [onPress, SetPress] = useState(false);
    return (

        <nav className=''>
            {
                !onPress ?
                    <div className='z-0 bg-slate-800 flex justify-around top-0 w-full    h-17 items-center cursor-pointer'>
                        <EngpyLogo size={'70'} />
                        <div className="hidden items-center sm:flex space-x-12">
                            <a href="#home" className="text-[white] hover:text-white hover:underline">Home</a>
                            <a href="#" className="text-[white] hover:text-white hover:underline">About</a>
                            <a href="#" className="text-[white] hover:text-white hover:underline">Doc</a>
                            <a href="#" className="text-[white] hover:text-white hover:underline">Example</a>
                            <a href="#" className="text-[white] hover:text-white hover:underline">AI</a>
                        </div>
                        <div>
                            <div className="hidden lg:flex items-center">
                                <input type="text" placeholder="Search..." className="border border-garay-300 rounded-lg px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button className="ml-2 bg-purple-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Search clicked!')}> Search </button>
                            </div>
                        </div>
                        <div className='hidden sm:flex item-center space-x-12'>
                            <button className='bg-purple-500 rounded px-7 py-2 text-[white]'><Link href={'/login'}>Login</Link></button>
                        </div>
                        <div className='block sm:hidden' >
                            <div className='absolute top-7'>
                                {
                                    !onPress ?
                                        <ListBulletIcon onClick={() => {SetPress(!onPress)}} className=' items-center' fontSize={'medium'} />
                                        :

                                        <div className='items-center'>
                                            <CloseIcon onClick={() => SetPress(!onPress)} className='items-center' fontSize={'medium'} />

                                        </div>

                                }
                            </div>


                        </div>
                    </div>
                    : ""
            }
            {onPress ? <ul className=' animate-plus duration-700 w-full bg-gray-600 px-5 py-7 items-center block text-left '>
                <CloseIcon onClick={() => SetPress(!onPress)} className='items-center' fontSize={'medium'} />
                <div className='items-center text-center jsutify-between flex w-full  '>
                    <EngpyLogo size={'100'} />
                    <div className='flex justify-around move'>
                        <div>
                            {
                                ["Home", "About", 'Dashboard', 'Terminal', "Doc", "Example", "AI"].map(
                                    menu => {
                                        return <Link href="#home" className="animate-plus move block mt-2 items-center duration-700 ease-in-out px-100 w-96 bg-200 px-3 text-center rounded text-gray] ">{menu}</Link>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </ul> : ""}
        </nav>
    )
}
