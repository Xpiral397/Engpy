'use client'

import React, {ReactNode, useEffect, useState} from 'react';
import sideBarContent from '@/src/app/api/utilis/acces/public/static/sidebar-content.json'
import Navbar from '../components/Navs/Navbar';
import DocSidebar, {RecentSidebarLinks} from './sidebar';
import {Recent, RecentActivity} from '../profile/Admin/recent';



export default function Page({children}: {children: ReactNode}) {
    const [recentLinks, setRecentLinks] = useState<{link: string, name: string}[]>([]);

    return (
        <Recent.Provider value={{recentLinks, setRecentLinks}}>
            <div className='h-[100vh] overflow-hidden bg-slate-900 text-white-200'>
                <Navbar />
                <main className='flex items-center justify-center '>
                    <div className='flex justify-between w-full '>
                        <div className='w-[250px] h-[100vh] hs-s'>
                            <DocSidebar topic={sideBarContent}
                                state={
                                    {
                                        sm: {
                                            lg: {hide: true}
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
                            <div className='flex  xl:px-[7%] mt-1  flex hs-none flex-1 w-full  space-x-10 hs '>
                                <div className='bg-slate-900 rounded-md  h-full w-full'>{children}</div>
                                <RecentSidebarLinks />
                            </div>

                        </div>


                    </div>
                </main>




            </div >
        </ Recent.Provider >
    )

}