
import '@/styles/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {BiData, BiRedo, BiSolidBookContent, BiSolidDevices, BiUndo} from 'react-icons/bi'
import {MdImportantDevices} from 'react-icons/md'
import {PiDeviceMobileCamera} from 'react-icons/pi'
import {TbDeviceTabletFilled} from 'react-icons/tb'
import {ArrowDownIcon} from '../components/icons/iconsSvg'
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

function Sidebar() {
    return <div className='bg-zinc-800 border-r-[.1px] border-zinc-950  h-screen '>
        <ul className='space-y-3'>
            <li className='h-8   rounded-sm py-3  px-3 text-center border-b-[.1px] border-zinc-950 font-sans font-[oblique] text-[12px] font-black text-slate-200 '><span>EpyFx</span></li>
            <li className='h-9   rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-4 py-2 rounded-md text-center  border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiData /></li>
            <li className='h-9   rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2  border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidBookContent /></li>
            <li className='h-9   rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidDevices /></li>
            <li className='h-9    rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiData /></li>
            <li className='h-9    rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidBookContent /></li>
            <li className='h-9   rounded-sm  bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidDevices /></li>
            {/* <li className='h-8   rounded-sm py-3  px-3 text-center border-b-[.1px] border-zinc-950 font-sans font-[oblique] text-[12px] font-black text-slate-200 '><span>EpyFx</span></li> */}
            <li className='h-9   rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-4 py-2 rounded-md text-center  border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiData /></li>
            <li className='h-9   rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2  border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidBookContent /></li>
            <li className='h-9   rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidDevices /></li>
            <li className='h-9    rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiData /></li>
            <li className='h-9    rounded-sm bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidBookContent /></li>
            <li className='h-9   rounded-sm  bg-zinc- border-b-[.1px] border-zinc-950 px-1 text-center px-4 py-2 border-zinc-900 font-sans font-[oblique] text-[18px] font-black text-slate-200 '><BiSolidDevices /></li>


        </ul>

    </div>
}

export default function Layout({
    children,
}: {

    children: React.ReactNode
}) {
    return (
        <html lang="en" className='fit-content w-full bg-zinc-800'>
            <body className={inter.className}>
                <div className='flex flex-row  '>
                    <Sidebar />
                    <div>
                        <nav className='h-8 flex w-full text-center items-center text-slate-100 text-[12px]  border-slate-800 border-b-[.1px] border-zinc-900'>
                            <ul className='w-full flex justify-between  items-center '>
                                <ul className='flex items-center space-x-[.5px] border-r-[.1px] border-zinc-900'>
                                    <li>
                                        <span className='text-slate-300 items-center flex text-[12px] space-x-4 px-3 py-2 '>Span: <h1>Addtion Template </h1> <ArrowDownIcon className='w-2 h-2' /></span>
                                    </li>
                                    <li>
                                        <span className='text-slate-300 items-center flex text-[12px] space-x-4 px-3 py-2 '><span className='  bg-zinc-500 px-2 rounded-sm shadow-xl '>items:</span><h1>Addtion Template </h1> <ArrowDownIcon className='w-2 h-2' /></span>
                                    </li>
                                </ul>
                                <ul className='flex items-center space-x-[.5px] border-r-[.1px] border-zinc-900'>
                                    <li className='flex items-center space-x-5 border py-[.1px] border-zinc-700 border-[2px] px- rounded-md'>
                                        <span className='text-slate-300 items-center flex text-[16px] space-x-4 px-3 py-2 '> <MdImportantDevices /> </span>
                                        <span className='text-slate-300 items-center flex text-[16px] space-x-4 px-3 py-2 '> <PiDeviceMobileCamera /> </span>
                                        <span className='text-slate-300 items-center flex text-[16px] space-x-4 px-3 py-2 '> <MdImportantDevices /> </span>
                                        <span className='text-slate-300 items-center flex text-[16px] space-x-4 px-3 py-2 '> <MdImportantDevices /> </span>
                                        <span className='text-slate-300 items-center flex text-[16px] space-x-4 px-3 py-2 '> <TbDeviceTabletFilled /> </span>
                                    </li>
                                    <li>
                                        <span className='text-slate-300 items-center flex text-[12px] space-x-4 px-3 py-2 '><span className='  bg-zinc-700 px-2 rounded-sm shadow-xl '>989px </span><h1>Add New Device </h1> <ArrowDownIcon className='w-2 h-2' /></span>
                                    </li>
                                </ul>
                                <ul className='flex items-center space-x-[.5px] border-r-[.1px] border-zinc-900'>
                                    <li>
                                        <span className='text-slate-300 items-center flex text-[12px] space-x-4 px-3 py-2 '>Span: <h1>Addtion Template </h1> <BiUndo /></span>
                                    </li>
                                    <li>
                                        <span className='text-slate-300 items-center flex text-[12px] space-x-4 px-3 py-2 '>Span: <h1>Addtion Template </h1> <BiRedo /></span>
                                    </li>
                                    <li>
                                        <span className='text-slate-300 items-center flex text-[12px] space-x-4 px-3 py-2 '><span className='  bg-zinc-500 px-2 rounded-sm shadow-xl '>Last Action:</span><h1>Addtion Template </h1> <ArrowDownIcon className='w-2 h-2' /></span>
                                    </li>
                                </ul>

                            </ul>
                        </nav>
                        <div>
                            {children}
                        </div>
                    </div>




                    {/* <main className='flex-1 '>
                        <div className='flex flex-col w-full border-l-[.1px] border-slate-800'>
                            <aside className='w-1/4'>

                            </aside>
                            <main className='h-full hs flex-1'>
                                <div className='w-1/2 border-b-[.1px] border-slate-800' contentEditable >

                                </div>

                                <div className='w-1/2 border-l-[.1px] border-slate-800' contentEditable >

                                </div>

                            </main>
                        </div>
                        <aside className='flex-1 border-l-[.1px] border-slate-800'></aside>
                    </main> */}
                </div>
            </body>
        </html >
    )
}
