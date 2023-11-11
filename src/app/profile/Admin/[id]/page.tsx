'use client'
import {GetUserProfile} from '@/src/app/api/utilis/acces/user/data/userData'
import EngpyLogo from '@/src/app/components/EngpyLogo';
import {ArrowDownIcon} from '@/src/app/components/icons/iconsSvg';
import {UserViatalLoginAttribute} from '@/types/componentBased/types';
import {Profile} from '@prisma/client';
import React, {useState} from 'react'



export default function AdminProfiler(user: any) {
    const [User, setUser] = useState<UserViatalLoginAttribute>({} as UserViatalLoginAttribute)
    const getUser = (() => new GetUserProfile({id: user.id}).getByID())();
    getUser.then((stream: any) => {
        const {email, role, username, firstName, lastName} = stream
        setUser({
            email,
            username,
            firstName,
            role,
            lastName

        })
    })

    return <nav className='w-full bg-white display flex fixed border-b border-gray-300 justify-between '>

        <ul className='flex items-center'>
            <li>All Project</li>
            <li>
                <div className='border rounded-full'>
                    <h1 className='px-2 py-1 text-slate-500'>{(User.username)}</h1>
                    <ArrowDownIcon className='h-2 w-2' />
                </div>
            </li>
        </ul>
    </nav>
}