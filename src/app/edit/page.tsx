'use client'
import React from "react";
import sideBarContent from '@/src/app/api/utilis/acces/public/static/sidebar-content.json'
import DocSidebar, {RenderList} from "../docs/sidebar";
import {ArrowDownIcon} from "../components/icons/iconsSvg";
import {BiAddToQueue} from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




export default function Edit() {

    return <div className="flex items-center w-full">
        <ul className="text-white font-medium font-sans text-[12px]">
            <nav className="border-zinc-950 border mx-1 my-1 rounded-md h-[98vh] w-[100%}">
                <div className="flex items-center  justify-between  rounded-md  bg-blue-700">
                    <button className="rounded-md py-3  px-3 text-white"> <h1>Add New Database</h1></button>
                </div>
                <div className="flex justify-center items-center  py-10 ">
                    <ul className="space-y-10 text-[14px] text-slate-100">
                        <div className="flex items-center  justify-between  rounded-md  bg-blue-700">
                            <button className="rounded-md py-3  px-3 text-white"> <h1>Add New Database</h1></button>
                            <div className="fixed  absolute w-[100%] h-[100%] bg-zinc-900 bg-opacity-50 rounded-md z-1 top-0 left-0 ">
                                <div className="py-10 px-10 hs-s w-[55%] h-[650px] bg-zinc-800 rounded-md items-center shadow-xl text-center top-[25%] absolute left-[calc(25%)] ">
                                    <div className="flex justify-between">
                                        <div className="">
                                            <div className="flex ">
                                                {/* <div className="w-full mt-3 mx-9 space-y-2" >
                                                    <h1 className="top-[50px] py-2 text-white text-[12px] no_wrap rounded-md bg-blue-500 w-full">Name of the Sidebar Content</h1>
                                                    <input className="w-[100%] bg-zinc-800 rounded-md py-2 border focus:outline-none px-10" />
                                                </div> */}
                                                <div className="w-full mt-3 mx-9 space-y-2" >
                                                    <h1 className="top-[50px] py-2 px-3 text-white text-[12px] no_wrap rounded-md bg-blue-500 w-full">Name of the Sidebar Content</h1>
                                                    <select className="bg-zinc-900 w-full focus:outline-none border-md py-1 px-1">
                                                        {['Expr', 'Matrix', 'AI'].map((e, index) => <option key={index}>{e}</option>)}
                                                    </select>
                                                </div>
                                                <div className="w-full mt-3 mx-9 space-y-2" >
                                                    <h1 className="top-[50px] py-2 px-3  text-white text-[12px] no_wrap rounded-md bg-blue-500 w-full">Name of the Sidebar Content</h1>
                                                    <select className="bg-zinc-900 w-full focus:outline-none border-md py-1 px-1">
                                                        {['New Topic', 'Refactor ', 'Rename'].map((e, index) => <option key={index}>{e}</option>)}
                                                    </select>
                                                </div>

                                                <div className="w-full mt-3 mx-9 space-y-2" >
                                                    <h1 className="top-[50px] py-2 px-3 text-white text-[12px] no_wrap rounded-md bg-blue-500 w-full">Name of the Sidebar Content</h1>
                                                    <select className="bg-zinc-900 w-full focus:outline-none border-md py-1 px-1">
                                                        {['Expr', 'Matrix', 'AI'].map((e, index) => <option key={index}>{e}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="text-left mt-10">New Topic</h1>
                                                <hr className="mt-[.1px] divide-x border-zinc-950" />
                                                <div className="flex mt-5 items-center space-x-5">
                                                    <h2>Topic:</h2>
                                                    <input className="focus:outline-none bg-zinc-700  rounded-md py-2 w-full " />
                                                </div>
                                            </div>

                                            <div className="hs">
                                                <h1 className="text-left mt-10">New Topic</h1>
                                                <hr className="mt-[.1px] divide-x border-zinc-950" />
                                                <div className="flex justify-between flex-row  mt-5 items-center space-x-5">
                                                    <h2 className="no_wrap">Select Topic Directory:</h2>
                                                    <div className="py-3 px-3 bg-zinc-700 rounded-md overflow-x-scroll hs">
                                                        <RenderList topic={{
                                                            'Cloud':
                                                                [
                                                                    {
                                                                        'Additon':
                                                                            ['Subtraction', 'mutliplication', {
                                                                                'Cloud':
                                                                                    [
                                                                                        {
                                                                                            '        Additon':
                                                                                                ['Subtraction', 'mutliplication', 'Division']
                                                                                        }
                                                                                    ]
                                                                            }]
                                                                    }
                                                                ]
                                                        }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="text-left mt-10">New Topic</h1>
                                                <hr className="mt-[.1px] divide-x border-zinc-950" />
                                                <div className="flex mt-5 items-center space-x-5">
                                                    <h2>Topic:</h2>
                                                    <input className="focus:outline-none bg-zinc-700  rounded-md py-2 w-full " />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="border-l-[1px] border-zinc-950 h-[500px] hs ">
                                            <h2>
                                                Sub Topics
                                            </h2>
                                            <RenderList topic={{
                                                'Cloud':
                                                    [
                                                        {
                                                            'Additon':
                                                                ['Subtraction', 'mutliplication', {
                                                                    'Cloud':
                                                                        [
                                                                            {
                                                                                '        Additon':
                                                                                    ['Subtraction', 'mutliplication', 'Division']
                                                                            }
                                                                        ]
                                                                }]
                                                        }
                                                    ]
                                            }} />
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex items-center  justify-between  rounded-md  bg-blue-700">
                                    <button className="rounded-md py-3  px-3 text-white"> <h1>Add New Database</h1></button>
                                </div>

                                <div className="flex items-center  justify-between  rounded-md  bg-blue-700">
                                    <button className="rounded-md py-3  px-3 text-white"> <h1>Add New Database</h1></button>
                                </div> */}

                            </div>
                        </div>
                    </ul>
                </div>
            </nav >


            {/* <EModal show={false} /> */}
            <div className="flex-1">

            </div>
        </ul>
    </div >
}
