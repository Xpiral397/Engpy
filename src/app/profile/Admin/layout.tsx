'use client'
import {OptionProfile} from "@/types/componentBased/types"
import axios from "axios"
import {Provider} from "react-redux"
import {GetUserProfile} from '@/src/app/api/utilis/acces/user/data/userData'
import EngpyLogo from '@/src/app/components/EngpyLogo';
import {ArrowDownIcon} from '@/src/app/components/icons/iconsSvg';
import {UserViatalLoginAttribute} from '@/types/componentBased/types';
import {Profile} from '@prisma/client';
import React, {useState, useEffect} from 'react'
import {AdminNavs, AdminService} from "./Navs/page";
import AdminSidebar from "./Sidebars/page";
import {MainContent} from "../../components/MainContent/Admin/page"



export default function Layout({children}: {children: React.ReactNode}) {
    const [loading, setLoading] = useState(false)
    const [User, setUser] = useState<UserViatalLoginAttribute>({} as UserViatalLoginAttribute)
    const [data, setData] = useState<OptionProfile>({})

    const getUserDetail = async () => {
        const res = await axios.get('/api/me', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const {email, role, username, firstName, lastName} = res.data.data[0]
        setUser({email, role, username, firstName, lastName})
    }

    async function loadCss() {
        return setTimeout(() => { }, 3000)
    }

    useEffect(() => {
        getUserDetail()
        loadCss().then(resolve => setLoading(true)).catch(error => console.log(error))
    }, [])

    return (
        // <Provider>

        <div className='hs-none bg-zinc-800 fit-content bg-zinc-800 '>{
            loading ?
                <div className="absolute w-full hs-none bg-zinc-800 ">
                    < div className="fixed w-full" >
                        <AdminNavs user={User} />
                        <AdminService />
                    </div >
                    <div className="flex  items-start mx-auto mt-[100px]  w-full">
                        <div className="">
                            <section>
                                <AdminSidebar />
                            </section>
                        </div>
                        <main className="w-full bg-zinc-800  h-[89vh] overflow-y-scroll scroll-content overflow-y-scroll hs-none ">
                            {children}
                        </main>
                    </div>
                </div>
                : <div className=' h-screen  '>
                    <nav className=""><AdminNavs user={User} />

                    </nav>
                    <div className=" h-screen flex  items-center  text-blue-900 text-2xl animate-pulse text-center justify-center"> Loading.......</div>
                </div>
        }</div >

    )

}



