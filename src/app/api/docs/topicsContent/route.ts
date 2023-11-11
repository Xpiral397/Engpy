import {NextRequest, NextResponse} from "next/server";
import fs from "fs/promises";
import {error} from "console";
import {URLSearchParams} from "next/dist/compiled/@edge-runtime/primitives/url";



export async function GET(request: NextRequest) {
    try {
        const loadSidebar = JSON.parse(await fs.readFile(`../../utilis/acces/public/static/sidebar-content.json`, 'utf8'))
        return NextResponse.json({message: `Error Creating DataLabel`}, {status: 201})
    }
    catch(error: any) {
        return NextResponse.json({message: 'DataLabel Created Suceefully'}, {status: 500})
    }
}


export async function POST(request: NextRequest) {
    const {content} = await request.json()
    try {
        await fs.writeFile(`../../utilis/acces/public/static/sidebar-content.json`, content, 'utf8')
        return NextResponse.json({message: `File Updated Successfully`}, {status: 201})
    }
    catch(error: any) {
        return NextResponse.json({message: 'DataLabel Created Sucessfully'}, {status: 500})
    }
}