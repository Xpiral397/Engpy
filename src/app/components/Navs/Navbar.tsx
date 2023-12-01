'use client'
import React, {useRef, useState} from 'react'
import EngpyLogo from '../EngpyLogo'
import {ListBulletIcon, CloseIcon, ArrowDownIcon} from '../icons/iconsSvg'
import Link from 'next/link'
import '@/styles/globals.scss';
import {color, useSetting} from '../../docs/cache/settings'
import {BiColor, BiFontColor, BiLogoGithub, BiMenu, BiPalette, BiSolidPalette} from 'react-icons/bi'
import {MdAccountBox, MdAccountCircle, MdArrowDownward, MdClose, MdColorize, MdDraw, MdHdrOffSelect, MdHome, MdOutlineArrowDropDown, MdToggleOff} from 'react-icons/md'
import {useAmp} from 'next/amp'
import {TbColorPicker} from 'react-icons/tb'
import {PiGithubLogo, PiGithubLogoFill, PiGithubLogoThin} from 'react-icons/pi'

export default function Navbar() {
    const [onPress, SetPress] = useState<boolean>(false);
    const [showTheme, setshowTheme] = useState<boolean>(false)
    const modal = useRef(null)
    const {setting, setSettings} = useSetting()


    return (
        <nav className={` text-bold relative w-full bg-red-100 `}>
            <div className='z-10 bg-white  dark:bg-slate-800 flex justify-around top-0 w-full    h-20 items-center cursor-pointer'>
                <div className='flex items-center space-x-1 '>
                    {!setting.showSideBar ?
                        <div className='text-violet-800  mt-1 dark:text-white text-3xl' onClick={() => {setSettings(e => ({...e, showSideBar: true}))}} >
                            <BiMenu />
                        </div> : ""
                    }
                    <h1 className='-mx-10 text-violet-800 text-3xl font-[sans-serif, Poppin] font-bold'>Engpy</h1>
                </div>
                <div className="hidden items-center sm:flex space-x-12">
                    <a href="#home" className="dark:text-[white]  text-purple-800 hover:text-white hover:underline">Home</a>
                    <a href="#" className="dark:text-[white]  text-purple-800 hover:text-white hover:underline">About</a>
                    <a href="#" className="dark:text-[white]  text-purple-800 hover:text-white hover:underline">Doc</a>
                    <a href="#" className="dark:text-[white]  text-purple-800 hover:text-white hover:underline">Example</a>
                    <a href="#" className="dark:text-[white]  text-purple-800 hover:text-white hover:underline">AI</a>
                </div>
                <div>
                    <div className="hidden lg:flex items-center">
                        <input type="text" placeholder="Search..." className="border border-garay-300 rounded-lg px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="ml-2  bg-purple-800 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded" onClick={() => console.log('Search clicked!')}> Search </button>
                    </div>
                </div>

                <span className='z-10 space-x-5 px-2 py-2 flex relative text-[30px] font-black dark:text-neutral-500 text-purple-500'>
                    <div className='relative' onClick={() => {setshowTheme(e => !e)}}><BiSolidPalette /></div>
                    {
                        showTheme ?
                            < ul className='text-sm rounded mt-[5px] space-y-2 left-10 absolute dark:bg-slate-700 bg-purple-800 dark:text-[inherit] text-white font-medium'>
                                {
                                    [
                                        <li className='hover:bg-purple-600 dark:hover:bg-slate-800 transition ease-in ease-out duration-400 rounded px-5 py-2 dark:bg-slate-700 bg-purple-800  text-white font-medium' key={0} onClick={() => {setshowTheme(e => !e); setSettings(e => ({...e, theme: 'dark'}))}}>Dark</li>,
                                        <li className='hover:bg-purple-600 dark:hover:bg-slate-800 transition ease-in ease-out duration-400 rounded px-5 py-2 dark:bg-slate-700 bg-purple-800  text-white font-medium' key={1} onClick={() => {setshowTheme(e => !e); setSettings(e => ({...e, theme: 'white'}))}}>Light</li>
                                    ].map(e => {setTimeout(() => { }, 1000); return <li key={0}>{e}</li>})
                                }

                            </ul> :
                            ""
                    }
                    <span className='dark:text-neutral-500 text-purple-500 font-black '>
                        <a href='https://github.com/miracle5284/engpy'><BiLogoGithub /></a>
                    </span>
                </span>

                <div className='xl:hidden block' >
                    <div className='absolute top-7'>
                        {
                            !onPress ?
                                <div className='relative' onClick={() => {SetPress(e => !e)}}>
                                    <ListBulletIcon className=' items-center' fontSize={'medium'} />
                                </div> :
                                <div className='relative mx-1 mt-10 duration-300 ease-in ease-out transition relative items-center ' ref={modal} >


                                    <div className='shadow-2xl right-0 z-10 absolute  rounded  bg-white dark:bg-slate-800 hs-none w-[300px] h-[250px]'>
                                        <div className='text-[18px] dark:text-white text-black absolute right-0 top-0 z-10 mt-3' onClick={() => {SetPress(!onPress)}}>
                                            <MdClose />
                                        </div>{/* <CloseIcon onClick={className='items-center' fontSize={'medium'} /> */}
                                        <div className='w-full flex justify-between text-blue-100 font-[sans-serif, Poppins] font-extrabold mt-1 py-10 font-medium text-[16px]' >
                                            <ul className='w-full space-y-5'>
                                                <div className='px-5 '>
                                                    <li className=' px-5 border border-slate-700 py-2 px-2 rounded-md flex sm:flex-cols justify-between w-full'>
                                                        <h1>Texts:</h1>
                                                        <input type='number' className='w-10 h-6 rounded-sm outline-none bg-slate-700 shadow shadow-xl ' />
                                                    </li> </div>
                                                <hr className='border dark:border-slate-700 border-purple-800'></hr>
                                                <div className='px-5'>
                                                    <li className=' px-5 flex sm:flex-cols justify-between w-full items-center '>
                                                        <h1 className='dark:text-[inherit] text-purple-800'>Swtich Theme</h1>
                                                        <div className='w-1/2 relative dark:bg-slate-700 bg-purple-800 dark:text-[inherit] text-white font-medium shadow-2xl py-3 px-3 rounded-md flex justify-between  items-center '>
                                                            <MdColorize />
                                                            <div className='space-y-2 '>
                                                                <h1 className='flex items-center text-[13px]'>
                                                                    <span className='text-medium'>
                                                                        {setting.theme == 'dark' ? "Dark" : 'white'}
                                                                    </span>
                                                                    <div className='text-2xl' onClick={() => {setshowTheme(e => !e)}}>
                                                                        <MdOutlineArrowDropDown />
                                                                    </div>
                                                                </h1>
                                                                {
                                                                    showTheme ?
                                                                        < ul className='mt-[5px] space-y-2 right-0 absolute dark:bg-slate-700 bg-purple-800 dark:text-[inherit] text-white font-medium'>
                                                                            {
                                                                                [
                                                                                    <li className='hover:bg-purple-600 dark:hover:bg-slate-800 transition ease-in ease-out duration-400 rounded px-5 py-2 dark:bg-slate-700 bg-purple-800 dark:text-[inherit] text-white font-medium' key={0} onClick={() => {setSettings(e => ({...e, theme: 'dark'}))}}>Dark</li>,
                                                                                    <li className='hover:bg-purple-600 dark:hover:bg-slate-800 transition ease-in ease-out duration-400 rounded px-5 py-2 dark:bg-slate-700 bg-purple-800 dark:text-[inherit] text-white font-medium' key={1} onClick={() => {setSettings(e => ({...e, theme: 'white'}))}}>Light</li>
                                                                                ].map(e => {setTimeout(() => { }, 1000); return <li key={0}>{e}</li>})
                                                                            }

                                                                        </ul> :
                                                                        ""
                                                                }
                                                            </div>
                                                        </div>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='hidden sm:flex item-center space-x-12'>
                    <button className=' font-bold rounded px-5 py-1 text-[white] bg-purple-800 text-sm font-bold'><Link href={'/login'}>Login</Link></button>
                </div>
            </div >


            {
                onPress ?
                    <ul className='hidden z-10 absolute justify-center flex  animate-plus duration-700 w-full bg-slate-900 text-white  items-center block text-left '>
                        < CloseIcon onClick={() => SetPress(!onPress)
                        } className='items-center' fontSize={'medium'} />
                        <div className='items-center text-center jsutify-between flex w-full  '>

                            <div className='flex justify-around move'>
                                <div>
                                    {
                                        [<div className='flex justify-between' key={0}><MdHome /><h1>Home</h1></div>, "About", 'Dashboard', 'Terminal', "Doc", "Example", "AI"].map(
                                            menu => {
                                                return <Link href="#home" key={0} className="animate-plus move block mt-2 items-center duration-700 ease-in-out px-100 w-96 bg-200 px-3 text-center rounded text-gray] " > {menu}</Link>
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </ul > : ""
            }

        </nav >
    )
}
