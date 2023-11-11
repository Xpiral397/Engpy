import {getDataFromToken} from "@/src/helpers/getDataFromToken ";
import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import {GetUserProfile} from "../utilis/acces/user/data/userData";


export async function GET(request: NextRequest) {
    try {
        const db = new PrismaClient()
        const userId = await getDataFromToken(request)
        const user = await new GetUserProfile({userId}).getByID()
        if(user === null) {
            return NextResponse.json({error: 'token id was inconsistent'}, {status: 500})
        }
        return NextResponse.json({data: user}, {status: 200})
    }
    catch(error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}