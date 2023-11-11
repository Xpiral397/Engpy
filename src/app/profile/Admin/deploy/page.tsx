import {DeployCard} from "@/src/app/components/Designs/deployCard/card";

export default function Draft() {
    return (
        <div className=" px-10 py-10 bg-zinc-800 rounded-md ">
            <div className=" mx-2  py-3 px-1 rounded-md text-white text-[12px]  sm:flex justify-between items-center">
                <span>Search <input type="text" className="h-10 mt-5 w-full border bg-slate-800 border-gray-200 focus:outline-none rounded-md focus:mx-10 " placeholder=" Search existing project template" /></span>
                <div> Filter By: <div className="mt-0 sm:mt-5 flex justify-between space-x-10">
                    <span className="flex items-center space-x-3"> <input className="bg-blue-900" type="checkbox" /> <h1>Expr</h1> </span>
                    <span className="flex items-center space-x-3"> <input className="bg-blue-800" type="checkbox" />  <h1>Vector</h1> </span>
                    <span className="flex items-center space-x-3"> <input className="bg-blue-800" type="checkbox" />  <h1>Matrix</h1> </span>
                    <span className="flex items-center space-x-3"><input className="bg-blue-800" type="checkbox" />   <h1>AI</h1></span>
                </div>
                </div>

            </div>
            <div className='mt-10  bg-zinc-800  grid grid-cols-1   sm:grid-cols-3  rounded-md shadow-xl  gap-12 gap-y-6  py-10 px-5'>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Vector" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Expr" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>

                <div>
                    <DeployCard deployName="Vector" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Expr" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>

                <div>
                    <DeployCard deployName="Vector" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Expr" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>

                <div>
                    <DeployCard deployName="Vector" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Expr" />
                </div>

                <div>
                    <DeployCard deployName="Vector" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Expr" />
                </div>
                <div>
                    <DeployCard deployName="Vector" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="AI" />
                </div>
                <div>
                    <DeployCard deployName="Expr" />
                </div>
            </div>
        </div>)
}