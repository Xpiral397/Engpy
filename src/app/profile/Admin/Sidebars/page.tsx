'use client'
import Link from "next/link";
import {useState} from "react";
import {ArrowDownIcon, DataIcon, DevIcon} from "../../../components/icons/iconsSvg";
import {useRouter} from "next/navigation";

export default function AdminSidebar() {
    const router = useRouter()
    const changeMainScreenContent = (to: string) => {
        router.push(to)
    }
    return <aside className="text-sans text-white border-zinc-900 px-10 border-r-[.1px] bg-zinc-800 h-[89vh]  shadow-sm w-full hidden sm:flex sm:flex-row ">
        <ul className=" w-full py-5 space-y-5  ">
            <li className=" py-2">
                <li className=" flex justify-between  space-x-5 py-1 items-center  w-full border-b-[.5px] ">
                    <span className="text-[12px]  no_wrap font-sans text-slate-300 font-medium"> Deployment </span>
                    <DataIcon className={'h-4 w-[18px] font-black textblue-300'} />
                </li>
                <div className=" px-2 mt-2  space-y-2">
                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap" onClick={() => {changeMainScreenContent('/Deploy/recentDeploy')}}>Recent Deployment</span>
                    </li>

                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap" onClick={() => {changeMainScreenContent('/profile/Admin')}}>New Deployment</span>
                    </li>


                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Requests</span>
                    </li>


                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Hands On</span>
                    </li>

                </div>
            </li>

            <li className=" py-2 ">
                <li className=" flex justify-between  textblue-300 space-x-5 py-1 items-center  w-full border-b-[.5px]   px-2 ">

                    <span className="text-[12px]  no_wrap font-sans text-slate-300 textblue-300 font-medium">Sync Devlopment </span>
                    <DevIcon className={'h-4 w-[18px] font-black textblue-300'} />

                </li>
                <div className=" px-2 mt-2  space-y-2">
                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Files</span>
                    </li>


                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Dashboards</span>
                    </li>

                </div>
            </li>

            <li className=" py-2 ">
                <li className=" flex justify-between  space-x-5 py-1 items-center  w-full border-b-[.5px]   px-2 ">

                    <span className="text-[12px]  no_wrap textblue-300 font-medium">Data Catalogue</span>
                    <DataIcon className={'h-4 w-[18px] font-black textblue-300'} />

                </li>
                <div className=" px-2 mt-2  space-y-2">
                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Data API</span>
                    </li>


                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Dashboards</span>
                    </li>

                </div>
            </li>


            <li className="  py-2 ">
                <li className=" flex justify-between  space-x-5 py-1 items-center  w-full border-b-[.5px]  px-2 ">

                    <span className="text-[12px]  no_wrap textblue-300 font-medium">Assesment</span>
                    <DataIcon className={'h-4 w-[18px] font-black textblue-300'} />

                </li>
                <div className=" px-2 mt-2  space-y-2">
                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap ">Data Labeling</span>
                    </li>


                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Commits</span>
                    </li>

                </div>
            </li>
            <li className=" py-2 ">
                <li className=" flex justify-between  space-x-2 py-1 items-center  w-full border-b-[.5px]  px-2 ">

                    <span className="text-[12px]  no_wrap textblue-300 font-medium">Devs</span>
                    <DataIcon className={'h-4 w-[18px] font-black textblue-300'} />
                </li>

                <div className=" px-2 mt-2  space-y-2">
                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Project</span>
                    </li>


                    <li className=" flex flex-col gap-4">
                        <span className="text-[12px]  no_wrap">Document</span>
                    </li>

                </div>
            </li>

        </ul>


    </aside>
}

