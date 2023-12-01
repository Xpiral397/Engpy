'use client'
import {redirect, useRouter} from "next/navigation"
import {ArrowDownIcon, CloseIcon, DataIcon, DevIcon, LeftArrowIcon} from "../components/icons/iconsSvg"
import {createContext, useEffect, useState} from "react"
import {json} from "stream/consumers"
import {useContext, Consumer, Provider} from "react";
import {Recent, useRecentLink} from "./cache/recent"
import {SettingProps, useSetting} from "./cache/settings"
import {resolvePath} from "@/utils/tools/tranform"
import {MdArrowRight, MdClose} from "react-icons/md"

export const SideContentInfos = createContext({link: "", content: ''})

export function RenderList({topic}: {topic: any}) {
    const router = useRouter()
    const {recentLinks, setRecentLinks} = useRecentLink()
    function pushRouter(route: string, name: string) {
        if(recentLinks.every(e => e.name != route)) {
            setRecentLinks([...recentLinks, {link: window.location.href + `/content/${route}`, name}])
        }
        router.push(`/docs/content/${route}`); redirect
    }
    const [state, setState] = useState<any>({})


    const addNewKey = (keyName: string) => {
        const key: any = {};
        key[keyName] = false
        setState({...state, ...key})
    }
    const updateKey = (keyName: string) => {
        const key: any = {};
        key[keyName] = !state[keyName]
        setState({...state, ...key})
    }
    return <ul className="w-full text-[13px] text-white mx-[5px] font-sans space-y-2">
        <li className="px-[2px]">
            {
                (topic instanceof Array) ?
                    <li className="  space-y-5 border-slate-700 ">
                        {
                            topic.map(
                                (items: string | Object, index) => {

                                    return <li key={index}>
                                        {
                                            items instanceof Object ?
                                                <RenderList topic={(items as any)} />
                                                :
                                                (items as string).includes('::') ?
                                                    <h1 className='dark:text-[inherit] text-violet-900 font-bold' onClick={() => pushRouter(items.split('::')[1], items.split('::')[0])} > {items.split('::')[0]}</h1>
                                                    : <h1 className="dark:text-[inherit] text-violet-900 font-bold">{items}</h1>
                                        }</li>
                                }
                            )}
                    </li>

                    :
                    topic instanceof Object ?
                        <li className="space-x-1 space-y-4 border-l-[0.5px] px-2  border-slate-700">
                            {
                                Object.keys(topic).map(
                                    (items: any, index) => {
                                        return <ul key={index} className="w-full space-y-2">
                                            <h1 className="w-full text-violet-800 dark:text-slate-200 font-medium flex justify-between items-center">
                                                {items.includes('::') ? <h1 className="text-left" onClick={() => pushRouter(items.split('::')[1], items.split("::")[0])}>{items.split('::')[0]}</h1> : <h1 className="text-left">{items}</h1>}
                                                <div
                                                    className=""
                                                    onClick={
                                                        () => {
                                                            // alert(state)
                                                            console.log(state)
                                                            if(state[items] === undefined) {
                                                                addNewKey(items)
                                                                console.log('done', state)
                                                            }
                                                            return updateKey(items)
                                                        }
                                                    }
                                                >
                                                    {items.includes('::') ? <ArrowDownIcon className={`h-3 w- dark:text-slate-300 text-violet-300 ${state[items] === true ? '' : 'rotate-[270deg]'}`} onClick={() => pushRouter(items.split('::')[1], items.split("::")[0])} /> : <ArrowDownIcon className={`h-3 w-3 ${state[items] === true ? '' : 'rotate-[270deg]'}`} />}

                                                </div>
                                            </h1>
                                            {
                                                state[items] ? <li className=" border-l-5 mx-3"
                                                    key={index}>

                                                    {
                                                        topic[items] instanceof Object ?
                                                            <RenderList topic={(topic[items] as any)} />
                                                            :
                                                            <h1 onClick={() => { }}>{topic[items]}</h1>
                                                    }
                                                </li> : ''
                                            }
                                        </ul>
                                    }
                                )
                            }
                        </li > : ""
            }
        </li >
    </ul >
}

export enum Mode {
    Production,
    Stateless
}


type LinkContext = {[key: string]: string}
export function RenderCurrentList() {

    const {recentLinks, setRecentLinks} = useRecentLink();



    function getCurrentLinkedList() {
        let linkContext: LinkContext = {};

        const linked = resolvePath(recentLinks[recentLinks?.length - 1]?.link)?.replace("http://localhost:3000/", '').split('/')
        let currPathUrl = 'http://localhost:3000/'
        for(const splits of linked) {
            currPathUrl += `/${splits}`;
            linkContext = {...linkContext, [`${splits}`]: currPathUrl}
        }
        return [linkContext, currPathUrl]
    }
    const getPace = useState({})
    const [currentLinkState, setCurrentLinkState] = useState<LinkContext>(getCurrentLinkedList()[0] as LinkContext)

    useEffect(() => {
        const map = getCurrentLinkedList()
        setCurrentLinkState(map[0] as LinkContext)
    }, [recentLinks])
    return <ul className="mx-1 sm:max-h-[300px] hs-h z-10 dark:bg-slate-800 bg-purple-800 sm:text-[12px] text-[13px] xl:text-[16px]  flex  xl:w-full w-full text-white dark:text-fuchsia-200 front-extrabold h-8 rounded-[3px] px-10 py-3 justify-between space-x-2">
        {
            Object.keys(currentLinkState).map(
                (link, index) => {
                    return (
                        <li key={index} className="flex items-center  ">
                            <a href={`${currentLinkState[link]}`}> {link}</a>
                            {
                                index !== Object.keys(currentLinkState).length - 1
                                    ? <h1 className="text-white font-back text-[18px] mx-2 "><MdArrowRight /></h1>
                                    : ""
                            }
                        </li>
                    )

                })
        }
    </ul >
}

export function RecentSidebarLinks() {
    const recent = useContext(Recent)
    const route = useRouter()


    return <div className="w-[100px] text-white   justify-between items-center ">

        <div className="  border-l-[1px]  border-slate-900 text-[13px]">
            <ul className="grid grid-cols-2 gap-y-5 gap-x-5 space-y-1 mt-2 border-l-[1px]  border-slate-900  ">
                {
                    recent?.recentLinks.map((recent_topic, index) => <li className='text-white font-extrabold text-[12px] underline mt-5  ' key={index} onClick={() => {route.push(`${recent_topic.link} `)}}> {recent_topic.name} </li>)
                }
            </ul>
        </div>
    </div>
}

interface State {
    sm?: {
        hide: boolean
    }
    lg?: {
        hide: boolean
    }
}
export default function DocSidebar({mode, topic, state, right, left}: {topic: {[key: string]: object}, state?: State, right?: boolean, left?: boolean, mode?: Mode}) {
    const Topics = Object.keys(topic ?? {})
    const {setting, setSettings} = useSetting()
    const [isClose, Closer] = useState<boolean>()
    const router = useRouter()
    const {recentLinks, setRecentLinks} = useRecentLink()
    console.log(setting, 'pillloow')
    function pushRouter(route: string, name: string) {
        if(recentLinks.every(e => e.link != window.location.href + `/content/${route} `) && name.length) {
            setRecentLinks([...recentLinks, {link: window.location.href + `/content/${route} `, name}])
        }

        // setTimeout(() => {console.log((route), 'Inlink')}, 1000)
        router.push(`/docs/content/${route} `)
    }
    const [sideContent, setSideContent] = useState({source: "", conetent: '', directories: false, childs: {}});
    return (

        <aside className={`hs-s  max-h-[100vh] transistion duration-300 ease-in ease-out relative w-full py-2 shadow-sm  flex  ${state?.sm?.hide ? 'hidden sm:flex sm:flex-row' : state?.lg?.hide ? 'lg:flex lg:flex-row hidden' : 'flex flex-row'} `} >

            <ul className=" w-full py-5 space-y-5 px-1   ">
                {
                    right ?
                        <div className="bg-white dark:bg-slate-800 bg-white mt-[-25px] fixe py-5 px-5 rounded-md space-y-5 ">
                            <div className="absolute right-1 top-0 static mt-2 text-white ">
                                {setting?.showSideBar ? <div onClick={() => {setSettings(e => ({...e, showSideBar: !e.showSideBar}))}}><div className="dark:text-inherit text-purple-800"><MdClose /></div></div> : ""}
                            </div>
                            <input className="w-full border rounded-md focus:outline-none py-2 px-3  border-[.51px] border-slate-400 dark:bg-slate-900 bg-white dark:text-white text-purple-800 font-bold text-sm" />
                            <select className="appearance-none leading-tight focus:outline-none focus:border-violet-800 bg-purple-800 dark:bg-slate-700 rounded-md text-white text-center w-full py-2 px-2 text-[13px] font-sans font-medium flex justify-between items-center ">
                                <option className="outline-none border-purple-800">
                                    <button><h1>V.0.01</h1><ArrowDownIcon className='w-3 h-3' /></button>
                                </option>
                            </select>


                        </div>
                        :
                        ""
                }
                <div className="w-full hs-s max-h-[70vh]">{
                    Topics.map(
                        (element, index) => {
                            return (
                                <li key={index} className=" py-2">
                                    <li className=" flex justify-between  space-x-5 py-1 items-center w-full px-2 ">
                                        <span onClick={() => {pushRouter(element.split('::')[1], element.split('::')[0])}} className={`text - [13px] text - white ${right ? "rounded-md font-medium w-full text-center py-2 dark:bg-slate-800 bg-violet-800 text-white font-bold" : ""} `}>
                                            {
                                                element.includes('::') ?
                                                    <span onClick={() => {pushRouter(element.split('::')[1], element.split('::')[0])}}>
                                                        {element.split('::')[0]}
                                                    </span>
                                                    : <span className=''>
                                                        {element}
                                                    </span>
                                            }
                                        </span>
                                        {/* <DataIcon className={'h-4 w-[18px] font-black text-blue-900'} /> */}
                                    </li>
                                    <div className="mt-[15px]  mx-1 space-y-1">
                                        {<RenderList topic={topic[element]} />}
                                    </div>
                                </li>)
                        })}
                </div>


            </ul>

        </aside >
    )
}
