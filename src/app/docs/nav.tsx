import Image from "next/image";
import engpy from '@/public/engpy.png'
import {ArrowDownIcon} from "../components/icons/iconsSvg";

export function AdminNavs({user}: {user: any}) {

    return (
        <div>
            <nav className='z-3 w-full bg-white display flex  border-b border-gray-300 justify-between px-2 '>
                <div className="flex w-full space-x-5 lg:space-x-10">
                    <div className="border rounded-full  bg-gradient-to-r from-slate-800 to via-purple-900 to-slate-900">
                        <div className="flex">
                            <Image className="animate-spin-slow duration-rotate-300 from rounded-full py-3 px-3 " alt='engpy' height={50} width={50} src={engpy.src} />
                            {/* <h1 className=" absolute top-[55px]  text-2xl left-[70px] font-balck text-zinc-900 ">Engpy</h1> */}
                        </div>
                    </div>
                    <ul className="flex items-center space-x-5 justify-between ">
                        <li className="text-[14px] text-center flex space-x-2 rounded-md "><span>Project Manager</span> <ArrowDownIcon className='h-2 w-[10px]' /></li>
                        <li className="text-[14px] text-center flex space-x-2  rounded-md "><span>Manage project</span> <ArrowDownIcon className='h-2 w-[10px]' /></li>
                        <li className="text-[14px] text-center  flex space-x-2 rounded-md "> <span>Access Project </span><ArrowDownIcon className='h-2 w-[10px]' /></li>
                    </ul>
                </div>
                <ul className='flex items-center space-x-3'>
                    <li className="text-[14px]border px-1 py-1 rounded-md flex space-x-2 "><span className="no_wrap">All Project   </span><ArrowDownIcon className='h-2 w-[10px]' /></li>
                    <li>
                        <div className=' flex items-center rounded-full border  justify-around rounded-md'>
                            <div className="hover:block  rounded-full px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-5">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg>
                            </div>

                            <div className='h-9 flex w-full px-2  justify-around rounded-md bg-slate-700 text-slate-100 items-center '>
                                <h1 className='px-2  text-[10px] font-[300px] text-slate-100 '>{(user.username)}</h1>
                                <ArrowDownIcon className='h-2 w-[10px]' />
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div></div>

        </div>)
}