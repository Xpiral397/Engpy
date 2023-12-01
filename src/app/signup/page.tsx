"use client"
import Link from 'next/link'
import React, {JSXElementConstructor, useEffect, useState} from "react"
import {CodeIcon, LeftArrowIcon, ArrowDownIcon} from '../components/icons/iconsSvg';
import {useRouter} from "next/navigation";
import Python from '@/public/asset/python.webp'
import EngpyLogo from '../components/EngpyLogo'
import user from '@/public/asset/user.png'
import Navbar from '../components/Navs/Navbar'
import Region from '@/types/Data/sortData'
import axios from 'axios'
import {Expriences, Lang, Prisma, PrismaClient} from '@prisma/client';
import {json} from 'stream/consumers';
import {EngpyPLanguage, Gender, Roles} from '@/utils/data/enums';
import {Exprience, UserSignup} from '@/utils/data/interface';
import {textTransform} from '@/utils/tools/tranform';
import {AuthUser} from '@/utils/authenticate/auth';
import '@/styles/globals.css'
import {UniquesUserAuth} from '@/types/componentBased/types';


export async function getServerSidePros() {
    const user = await new PrismaClient().user.findMany()
    return {
        props: {initialUser: user}
    }
}


export default function LoginPage() {
    const [Mode, setMode] = useState('Login')
    const [Opener, setOpener] = useState<keyof typeof Roles>('SU')
    const [active, setActive] = useState<keyof typeof Roles>('SU')

    const [code, setCode] = useState<string>("")
    const [pass, setPass] = useState<boolean>(false)
    const [ID, setID] = useState<string>("")

    const router = useRouter();

    const [overlay, setoverlay] = useState(false);
    // const []

    const [Error, setError] = useState(
        {
            email: "",
            FirstName: '',
            Surname: '',
            mobile: true,
            country: '',
            continent: "",
            password: "",
            username: "",
            referCode: '',
            Language: "",
            accountType: active,
            Role: '',
            Experince: {}
        }
    )

    const [user, setUser] = useState<UserSignup>(
        {
            email: "",
            Gender: Gender.MALE,
            FirstName: " ",
            Surname: "",
            mobile: '',
            country: '',
            continent: "",
            password: "",
            password1: "",
            password2: "",
            username: "",
            referCode: '',
            accountType: active,
            Role: active,
            Experince: [
                {
                    lanaguage: 'PYTHON',
                    Projects: "",
                    Year: 6
                }
            ]
        }
    )

    const [Info, SetFormInfo] = useState<UniquesUserAuth>(
        {

            email: user.email,

            mobile: user.mobile,

            password: user.password,

            referalCode: {
                ID,
                code
            }
        }
    )

    const [confirmed, confirm] = useState<{[key: string]: boolean}>(
        {
            email: false,
            password: false,
            mobile: false,
        }
    )


    let db = new AuthUser(Info);


    const VerifySignUpForm = () => {
        let passed: boolean[] = [];
        function verifyEmail(email: string): boolean {
            const test = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
            // console.log(test)
            return test
        }

        function verifyName(name: string) {
            return /[A-Za-z\s]+$/.test(name as string) && name.length > 3;
        }

        function verifyNumber(number_: string) {
            return number_.length > 6 && number_.length <= 15
        }

        function isLangaugeSelected(langs: String, Role: Roles) {
            if(Role != Roles.SU) {
                return Object.values(EngpyPLanguage).includes(langs as keyof typeof EngpyPLanguage)
            }
            return true
        }
        const Form: {[key: string]: any} = {email: verifyEmail(user.email as string), Surname: verifyName(user.Surname), FirstName: verifyName(user.FirstName), mobile: verifyNumber(user.mobile), password: ((user.password.length > 1) && (user.password1 === user.password2)), Country: user.country ? true : false, Continent: user.continent ? true : false}
        var map: {[key: string]: any} = Error
        for(const key in Form) {
            map[key] = Form[key]
            passed.push(map[key])
        }

        console.log(Form)
        setError({...Error, ...map})
        if(passed.every(e => e === true)) {
            // console.log("aboout to connet to server ")
            (db.alreadyExit() as any).then(
                (request: any) => {
                    request.
                        json().then(
                            (e: any) => {
                                confirm({...confirm, ...e})
                                if(Object.keys(e).every(e5 => e[e5] === false)) {
                                    setPass(true)

                                }
                                else {
                                    setPass(false)

                                }
                            }
                        )
                }
            )

        }
        else if(!passed.every(e => e === true)) {
            setPass(false)
        }
        // console.log(passed)
    }

    const [filled, setFill] = useState<boolean>(false)

    const SingUp = () => {
        try {
            (db.alreadyExit() as any).then(
                (request: any) => {
                    request.
                        json().then(
                            (e: any) => {

                                confirm({...confirm, ...e})

                                console.log(confirmed, e)


                                if(Object.keys(confirmed).every(e => confirmed[e] === false)) {
                                    setPass(true)
                                    console.log([true, 8])
                                }
                                else {
                                    setPass(false)
                                }
                            }
                        )
                }
            )
        }
        catch(e) {

        }

        if(pass) {
            try {
                const response = fetch('/api/users/signup',
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            ...user
                        })
                    },)
                router.push('/login')
            }
            catch(error: any) {
                // console.log("Singup Failed:" + error.message)
            }

        }
    }
    useEffect(
        () => {
            VerifySignUpForm();

            // console.log(pass, confirmed)

            // console.log(confirmed, Info, 'Brung')
        }, [user])

    const List: {[key: string]: {[key: string]: React.JSX.Element}} = {
        SU:
        {
            head:
                <div onClick={() => setActive('SU')} className='flex justify-center px-6 py-2 text-center  bg-slate-950 rounded-sm text-white' >
                    <div>
                        <span className='text-[14px] text-center'>
                            Simple User (SU)
                        </span>
                    </div>
                    {/* <ArrowDownIcon /> */}
                    {/* <LeftArrowIcon /> */}
                </div >
            ,
            body:
                <li  >
                    <li className=''>
                        <h1 className='flex items-center space-x-4  text-xl font-[poppins]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                            <span>Sign Up As Simple Users</span>

                        </h1>
                        <h1 className='w-[90%] mt-1 ml-10 mb-4 py-2 px-2 bg-pink-100 py-2 px-2'>
                            Login as a simple user to get all sort of notification and new update on Engpy , across all management service
                        </h1>
                        <button className='hover:translate-y-1 duration-500 hover:animate-pulse ml-10 text-slate-100 rounded-md px-8 py-1 bg-gradient-to-r from-slate-800 via-purple-700 text-[18px] to-purple-900  mb-2'> Sign up </button>
                        <hr />
                    </li>
                </li >
        },

        TP: {
            head:
                <div onClick={() => setActive('TP')} className='flex justify-center px-6 py-2 text-center  bg-slate-950 rounded-sm text-white'>
                    <div>
                        <span className='text-[14px]'>
                            TestPointer (TP)
                        </span>
                    </div>
                    {/* <ArrowDownIcon /> */}
                    {/* <LeftArrowIcon /> */}
                </div>,
            body: < li >
                <li className=''>
                    <h1 className='flex items-center space-x-4 text-xl font-[poppins]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                        <span>Sign Up As TestPointer User</span>
                    </h1>
                    <h1 className='w-[90%] mt-1 ml-10 mb-4 bg-green-200 px-2 py-2'>
                        Login as a simple user to get all sort of notification and new update on Engpy , across all management service
                    </h1>
                    {/* <hr /> */}
                </li>
                <button className='ml-10 text-white rounded-md px-8 py-1 bg-gradient-to-r from-slate-900 via-purple-600 text-[18px] to-purple-950 mb-2'> Sign up </button>
                <hr />
            </li >
        },
        admin: {
            head:
                <div onClick={() => setActive('ADMIN')} className='flex  justify-center px-6 py-2 text-center  bg-slate-950 rounded-sm text-white'>
                    <div>

                        <span className='text-[14px]'>
                            Admin (EH)
                        </span>
                    </div>
                    {/* <ArrowDownIcon /> */}
                    {/* <LeftArrowIcon /> */}
                </div>,
            body:
                < li className='' >
                    <h1 className='flex items-center space-x-4 text-xl font-[poppins]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg >
                        <span>Sign Up As TestPointer User</span>

                    </h1 >
                    <h1 className='w-[90%] mt-1 ml-10 mb-4 bg-pink-200 py-2 px-2'>
                        Login as a simple user to get all sort of notification and new update on Engpy , across all management service
                    </h1>
                    <button className='ml-10 text-slate-200 rounded-md px-8 py-1 bg-gradient-to-r from-slate-900 via-purple-700 text-[18px] to-purple-950  mb-2'> Sign up </button>
                    <hr />
                </li >
        }
    }

    const accountTypeList = Object.keys(List)
    function enable(switchForm: string) {
    }
    return (
        (
            <div className='relative closure_select w-full bg-gradient-to-r from-slate-600 via-purple-900 to-slate-900 font-[sans]'>
                {
                    overlay ?
                        <div className='absolute  w-full h-full bg-[#0000a001]'>
                            <div className='flex h-[100vh] w-full text-center items-center justify-center'>
                                <div className='overlay bg-white text-purpel-600 extrabold'>
                                    <div className='animate animate-spin'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" /></svg>
                                    </div>
                                    Please wait
                                </div>
                            </div>
                        </div>
                        :
                        <div className=''>

                        </div>
                }

                <div className=''>
                    <div className='mb-10 sm:px-10 flex items-center justify-between  sm:justify-around'>
                        <h1 className='text-blue sm:text-4xl text-white mt-10 font-[sans]'>Engpy</h1>
                        <div className='flex space-x-3 items-center mt-10'>
                            <h2 className='sm:block hidden text-slate-100 font-[sans] sm:text[10px]'>
                                Already have account?
                            </h2>
                            <button className='text-slate-300 bg-slate-950 rounded-md px-3 py-1' >
                                <Link href={'/login'}>Logi in </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center  justify-center '>
                    <h1 className='text-xl sm:text-4xl text-white mb-5'>Get Started on Engpy today</h1>
                    <ul className=' flex-row  bg-white shadow-xl sm:py-4 sm:px-4 rounded-md'>
                        <div className=' sm:flex-col lg:flex-col  sm:w-[600px] w-full text-left  justify-between mb-10 '>
                            <li className=' flex-row items-center justify-center  w-full '>
                                <div className='flex justify-center  w-full '>
                                    <div className='w-full'>
                                        <div className='sm:flex justify-between '>
                                            {/* <h1 className='text-2xl'>Sign Up As:</h1> */}
                                            {
                                                accountTypeList.map((e) => {
                                                    setTimeout(() => {
                                                    }, 1000);
                                                    // eslint-disable-next-line react/jsx-key
                                                    return <div className='w-full p-6'>
                                                        {
                                                            List[e]?.head
                                                        }
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                                {
                                    List[active]?.body
                                }
                            </li>

                            <li>
                                <div className='bg-white shadow-2xl w-full mt-10 h-full py-2   rounded-xl'>
                                    <div className='px-2 py-3'>

                                        {/* <h1 className='text-xl text-left ml-10 text-blue-900 '> Primary Information</h1> */}
                                        <div className='divide-y' />
                                        <div className='w-full flex grid-cols-2 gap-2'>
                                            <div className='w-full'>
                                                <div className={`mt-5 ${!Error.Surname ? "text-[red]" : "text-blue-600"}`}>
                                                    Surname<span className='text-[red]'>*</span>
                                                </div>
                                                <input placeholder='    Surname' onChange={e => setUser({...user, Surname: e.target.value})} className='w-full closure_select mt-2 ml-1 w-full border-slate-300 border-blue focus:text-black focus:outline-none border rounded-md h-10' type='text' />
                                            </div>


                                            <div className='w-full'>
                                                <div >
                                                    <div className={` mt-5 ${!Error.FirstName ? "text-[red]" : "text-blue-600"}`}>
                                                        FirstNames<span className='text-[red]'>*</span>
                                                    </div>
                                                    <input placeholder='    Other Name' onChange={e => setUser({...user, FirstName: e.target.value})} className=' mt-2 ml-1 h-10  border-slate-300  w-full border-gray focus:text-black focus:outline-none border rounded-md' type='text' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full flex items-center space-x-3'>
                                            <div className='w-[70%]'>
                                                {/* {console.log(Info)} */}
                                                <div className={`mt-5  ${!Error.email ? "text-[red]" : confirmed.email ? 'text-orange-500 mr-2 text-[15px]' : "text-blue-600"}`}>
                                                    {!Error.email ? 'Enter a valid email' : (confirmed.email ? 'The email you enter has been used ' : '')} <span className="text-[red]"></span>
                                                </div>

                                                <input placeholder='    Email address' onChange={e => {SetFormInfo({...Info, email: e.target.value}); setUser({...user, email: e.target.value})}} className='w-full h-10 mt-2 ml-1 border-slate-300 rounded-md focus:text-black focus:outline-none border rounded-[7px]' type='email' />

                                            </div>



                                            <div className='w-[30%] ' >
                                                <div className='text-blue-500  mt-5 text-[15px]'><h1 className='text-blue-500 text-[15px]'>Gender:</h1></div>
                                                <select className='w-full mt-2 block  text-slate-900 px-3 border  focus:outline-none  rounded-md h-10 ' onChange={(e) => {setUser({...user, Gender: e.target.value as unknown as Gender})}}>
                                                    {
                                                        Object.values(Gender).map((gender, key) => <option value={gender} key={gender}>{<h1>{textTransform(gender as string)}</h1>}</option>)
                                                    }

                                                </select>


                                            </div>
                                        </div>

                                        {/* Regional nal Form  */}


                                        <div className='mt-10'>

                                            <div className='grid items-center  gap-1 grid-cols-3'>
                                                <div className='flex-col'>
                                                    {<h1 className='text-[red]'>
                                                        {Error.continent ? 'Inavlid' : ""}
                                                    </h1>}
                                                    <select className='w-full block text-slate-900 py-2 px-3 border focus:outline-none p-6 rounded-md' onChange={(e) => {
                                                        setUser({...user, continent: e.target.value})
                                                    }}>
                                                        <option style={{color: 'red', background: 'blue'}}>-select Continent-</option>

                                                        {
                                                            Region.getContinet().map((continents, key) => <option key={key} value={continents}> {continents} </option>)

                                                        }
                                                        {/* {console.log(user.continent ? Object.keys(Region.getCountryFromContinent(user.continent)) : '')} */}

                                                    </select>
                                                </div>


                                                <div className='flex-col'>
                                                    <h1 className='text-[red]'>
                                                        {Error.country ? "Inavlid" : ""}
                                                    </h1>
                                                    <select className='w-full block text-slate-900 py-2 px-3 border  focus:outline-none p-6 rounded-md' onChange={(e) => {setUser({...user, country: e.target.value})}}>
                                                        <option>{user.continent ? `--select a country--` : 'select  a continent first '}</option>
                                                        {/* {console.log(user.continent, 'WRgvwg')} */}

                                                        {user.continent ? Object.keys(Region.getCountryFromContinent(user.continent)).map((country, index) => <option key={index}>{country}</option>) : "No to display"}

                                                        {/* </option> */}
                                                    </select>
                                                </div>




                                                <div className='flex-col'>
                                                    <div className='flex items-center '>
                                                        <span className={`px-2 shadow-sm py-1 px-4 text-slate-900 text-[15px] text-900  rounded-sm  ${Error.mobile ? "font-black text-red-500" : "font-black text-blue-500"}`}>
                                                            {user.continent && user.country ? Region.getCountryCodeFromCountry(user.continent, user.country) : "000"}
                                                        </span>
                                                        <div>
                                                            <span className='text-orange-500 text-[14px] '>
                                                                {confirmed.mobile ? "Number is used already" : ''}
                                                            </span>
                                                            <input type='tel' onChange={e => {
                                                                SetFormInfo({...Info, mobile: e.target.value}); setUser({...user, mobile: e.target.value})
                                                            }} className='w-full  text-slate-900 col-span-9 py-2 px-4 text-[15px] focus:outline-none border border-blue rounded-md' />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>






                                        <div className=' '>
                                            <div className={`flex ${active === 'ADMIN' ? 'justify-between' : 'justify-between'}   items-center`}>
                                                <div className="."></div><div className='w-[100%] flex space-x-[3.5px] items-center'>
                                                    <div className='w-full'>
                                                        <div className={`w-full mt-5 ${!Error.password ? "text-[red]" : ""}`}>
                                                            Password <span className='text-[red]'>*</span>
                                                        </div>

                                                        <input onChange={e => setUser({...user, password: e.target.value, password1: e.target.value})} className='w-[90%] h-10 mt-2 ml-1 border-slate-300 focus:text-black focus:outline-none border rounded-md' type='password' />

                                                    </div>

                                                    <div className='w-full'>
                                                        <div className={`w-full mt-5 ${!Error.password ? "text-[red]" : ""}`}>
                                                            Password <span className='text-[red]'>*</span>
                                                        </div>

                                                        <input onChange={e => {SetFormInfo({...Info, password: e.target.value}); setUser({...user, password2: e.target.value})}} className='w-full h-10 mt-2  border-slate-300 focus:text-black focus:outline-none border rounded-md' type='password' />

                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                        {
                                            active === 'ADMIN' ?
                                                <div className='w-full flex items-center justify-between'>


                                                    <div className='w-full' >
                                                        <div className='flex mt-5'>
                                                            Referal Code <span className=' no_wrap text-[red]'>*</span>
                                                        </div>
                                                        <input placeholder='' className='w-[80%] h-10 mt-2 ml-3 border-slate-300 focus:text-black focus:outline-none border rounded-[7px]' type='text' />
                                                    </div>


                                                    <div className='w-full' >
                                                        <div className='flex mt-5'>
                                                            Referer ID <span className=' no_wrap text-[red]'>*</span>
                                                        </div>
                                                        <input placeholder='Refreral ID' className='w-[80%] h-10 mt-2 ml-3 border-slate-300 focus:text-black focus:outline-none border rounded-[7px]' type='text' />
                                                    </div>

                                                </div> :
                                                ""
                                        }
                                    </div>
                                </div>





                                {
                                    active == 'ADMIN' ?
                                        <div>
                                            < div onClick={() => {enable('Region')}} className='mt-10 flex justify-between items-center justify-center'>
                                                <h1 className=' text-[15px] text-transform-capitalize text-center text-left ml-10 text-blue-900 '> Admin </h1>
                                                {/* <ArrowDownIcon /> */}
                                                <hr />

                                            </div>
                                            <div className='mt-8 flex  items-center   justify-between'>
                                                <div className='sm:w-3/3 w-2/5'>
                                                    <span className='font-balck text-blue-600'>Select a langauge  </span>
                                                    <select className='border-[1px]  border rounded-md py-2 w-full focus:outline-none'>
                                                        {
                                                            Object.keys(Lang).map((Langs) => <option key={Langs}>{Langs}</option>)
                                                        }
                                                    </select>

                                                </div>
                                                < div className='w-1/3'>
                                                    <span className='font-balck text-blue-600'>Years Of Experience  </span>
                                                    <select className=' closure_select border-[1px]  border rounded-md py-2 w-full focus:outline-none'>
                                                        {
                                                            [1, 2, 3, 4, 5, 6, 7, '8+'].map((Langs) => <option key={Langs}>{Langs}</option>)
                                                        }
                                                    </select>

                                                </div>

                                            </div >

                                            <div className='mt-10 '>
                                                <span className='text-blue-500'>Tell us more  about you , your servicxe , work experience and Knowledge about you and us </span>
                                                <textarea className='w-full border focus:outline-none h-[100px]' />
                                            </div>
                                        </div>
                                        : ""
                                }
                            </li>
                        </div>

                        {
                            pass ?
                                <button onClick={SingUp} className='w-full mt-10 h+00:translate-y-1 resize:none duration-500 hover:animate-pulse text-slate-100 rounded-md px-8 py-1 bg-gradient-to-r from-slate-800 via-purple-700 text-[18px] to-purple-900  mb-2'> Sign up </button>
                                :
                                <button className='opacty_1 w-full mt-10 hover:translate-y-1 resize:none duration-500 hover:animate-pulse text-slate-100 rounded-md px-8 py-1 bg-gradient-to-r from-slate-800 via-purple-700 text-[18px] to-purple-900  opacity-[0.7] mb-2'> Form Not Filled Completly </button>
                        }
                    </ul >
                </div >
            </div >

        )
    )
}