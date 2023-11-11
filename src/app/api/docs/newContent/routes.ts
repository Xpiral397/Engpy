import {NextRequest, NextResponse} from "next/server";
import fs from "fs/promises";
import {error} from "console";



export async function POST(request: NextRequest) {
    const payloads = await request.json();
    const {folder, file} = payloads;
    try {
        await fs.mkdir(`../.././../../app/docs/Loader/${folder}`, {recursive: true})
    }
    catch(error: any) {
        return NextResponse.json({message: 'DataLabel Created Suceefully'}, {status: 500})
    }
    return NextResponse.json({message: `Error Creating DataLabel`}, {status: 201})
}