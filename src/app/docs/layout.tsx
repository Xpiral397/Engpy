'use client'

import React, {ReactNode, useEffect, useState} from 'react';
import sideBarContent from '@/src/app/api/utilis/acces/public/static/sidebar-content.json'
import Navbar from '../components/Navs/Navbar';
import DocSidebar, {RecentSidebarLinks, RenderCurrentList} from './sidebar';
import {Recent, RecentActivity, useRecentLink} from './cache/recent';
import {Setting, SettingProps, Settings, useSetting, } from './cache/settings';




export default function Page({children}: {children: ReactNode}) {
    const {recentLinks, setRecentLinks} = useRecentLink()
    const [sidebar_updated, set_sidebar_updated] = useState<boolean>(true)
    const {setting, setSettings} = useSetting()

    useEffect(() => {
        const count = setTimeout(() => {set_sidebar_updated(e => !e)}, 500)
    }, [setting.showSideBar])

    return (


        <div className='w-full transistion duration-700 h-[100vh] overflow-hidden bg-neutral-300 dark:bg-slate-900 text-white-200'>
            <div className='w-full'><Navbar /></div>
            <main className='flex items-center justify-center '>
                <div className='flex sm:justify-center xl:justify-between w-full '>
                    <div className={` ${sidebar_updated ? "hidden" : "block"} transistion duration-700 ease-in ease-out z-10 xl:relative absolute xl:bg-transparent dark:bg-slate-900 bg-white left-0  w-[250px]  ${!setting.showSideBar ? "-translate-x-[500px]" : "translate-x-0"}`}>
                        <DocSidebar topic={sideBarContent}
                            state={
                                {
                                    sm: {
                                        hide: false,
                                    },

                                    lg: {
                                        hide: false
                                    }
                                }
                            }
                            right={true}
                        />
                    </div>


                    <div className='w-full '>

                        <div className='flex  mt-1  flex hs-s flex-1 w-full   '>

                            <div className='dark:bg-slate-900 bg-white rounded-md relative  h-full w-full'>
                                <div className='px-10'>
                                    <div className='mx-3 hs-h px-2 py-3 hs-h sm:absolute static  '>
                                        <RenderCurrentList />
                                    </div>
                                </div>
                                <div className='z-2 mt-[-50px]  h-full  w-full'>

                                    {children}

                                </div>
                            </div>
                            {/* <div className='xl:block  hidden w-[300px] flex justify-center my-8  border-l-[.1px] boder-slate-900 rounded-md'>
                                        <div className='w-full px-2 py-2'>
                                            <h1 className="text-white no_wrap text-[13px] rounded-md">Recent List</h1>
                                            <hr className='w-full  ' />
                                            <RecentSidebarLinks />
                                        </div>

                                    </div> */}
                        </div>
                    </div>

                </div>
            </main>
        </div >

    )

}