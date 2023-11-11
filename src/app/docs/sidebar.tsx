'use client'
import {useRouter} from "next/navigation"
import {ArrowDownIcon, DataIcon, DevIcon, LeftArrowIcon} from "../components/icons/iconsSvg"
import {createContext, useState} from "react"
import {json} from "stream/consumers"
import {useContext, Consumer, Provider} from "react";
import {Recent, useRecentLink} from "../profile/Admin/recent"

export const SideContentInfos = createContext({link: "", content: ''})

export function RenderList({topic}: {topic: any}) {
    const router = useRouter()
    const {recentLinks, setRecentLinks} = useRecentLink()
    function pushRouter(route: string, name: string) {
        if(recentLinks.every(e => e.link != window.location.href + `/content/${route}`)) {
            setRecentLinks([...recentLinks, {link: window.location.href + `/content/${route}`, name}])
        }
        router.push(`/docs/content/${route}`)
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
                                                    <h1 onClick={() => pushRouter(items.split('::')[1], items.split('::')[0])} > {items.split('::')[0]}</h1>
                                                    : <h1 className="text-left">{items}</h1>
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
                                            <h1 className="w-full  text-slate-200 font-medium flex justify-between items-center   ">
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
                                                    {items.includes('::') ? <ArrowDownIcon className={`h-3 w-3 ${state[items] === true ? '' : 'rotate-[270deg]'}`} onClick={() => pushRouter(items.split('::')[1], items.split("::")[0])} /> : <ArrowDownIcon className={`h-3 w-3 ${state[items] === true ? '' : 'rotate-[270deg]'}`} />}

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


export function RecentSidebarLinks() {
    const recent = useContext(Recent)
    const route = useRouter()


    return <div className=" text-white lg:block hidden  justify-between items-center ">
        <h1 className="text-white no_wrap text-[13px] px-[100px] py-3 rounded-md  bg-slate-800">Recent List</h1>
        <div className="  border-l-[1px]  border-slate-900 text-[13px] mx-5  ">
            <ul className="space-y-1 mt-2 border-l-[1px]  border-slate-900   items-center justify-left ">
                {
                    recent?.recentLinks.map((recent_topic, index) => <li className='w-[90%] text-center py-2   bg-slate-800' key={index} onClick={() => {route.push(`docs/Loader/${recent_topic.link}`)}}> {recent_topic.name} </li>)
                }
            </ul>
        </div>
    </div>
}



export default function DocSidebar({mode, topic, state, right, left}: {topic: {[key: string]: object}, state: object, right: boolean, left: boolean, mode: Mode}) {
    const Topics = Object.keys(topic)
    const router = useRouter()
    const {recentLinks, setRecentLinks} = useRecentLink()
    function pushRouter(route: string, name: string) {
        if(recentLinks.every(e => e.link != window.location.href + `/content/${route}`) && name.length) {
            setRecentLinks([...recentLinks, {link: window.location.href + `/content/${route}`, name}])
        }
        router.push(`/docs/content/${route}`)
    }
    const [sideContent, setSideContent] = useState({source: "", conetent: '', directories: false, childs: {}});
    return (

        <aside className={`w-[250px] text-sans py-2 shadow-sm w-full flex  ${state?.sm.hide ? 'hidden sm:flex sm:flex-row' : state?.lg.hide ? 'lg:flex lg:flex-row hidden' : 'flex flex-row'}`} >
            <ul className=" w-full py-5 space-y-5 px-1   ">
                {
                    right ?
                        <div className="bg-slate-800 mt-[-25px] fixe py-5 px-5 rounded-md space-y-5 ">
                            <input className="w-full border rounded{-md focus:outline-none py-2 px-3  border-[.51px] border-slate-400 bg-slate-900 text-white" />
                            <button className="bg-slate-700 rounded-md text-white text-center w-full py-2 px-2 text-[13px] font-sans font-medium flex justify-between items-center "><span>V.0.01</span><ArrowDownIcon className='w-3 h-3' /></button>
                        </div>
                        :
                        ""
                }
                <div className="w-full hs-none">{
                    Topics.map(
                        (element, index) => {
                            return (
                                <li key={index} className=" py-2">
                                    <li className=" flex justify-between  space-x-5 py-1 items-center w-full px-2 ">
                                        <span onClick={() => {pushRouter(element.split('::')[1], element.split('::')[0])}} className={`text-[13px] text- ${right ? "rounded-md font-medium w-full text-center py-2 bg-slate-800" : ""} `}>
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
                                    <div className="mt-[5px]  mx-1 space-y-1">

                                        {<RenderList topic={topic[element]} />}


                                    </div>
                                </li>)
                        })}
                </div>


            </ul>

        </aside >
    )
}
