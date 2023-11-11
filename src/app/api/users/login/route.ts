import {Prisma, PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"
import {Hash} from "crypto";


export async function GET(request: NextRequest) {
    try {
        let params = new URL(request.url)
        const email = decodeURIComponent(params.searchParams.get('UsernameOrEmail') as string)
        const password = decodeURIComponent(params.searchParams.get('password') as string)

        const Prisma = new PrismaClient()
        const CurrentUser = await Prisma.profile.findFirst(
            {
                where: {
                    email
                }
            })




        if(await bcryptjs.compare(password, CurrentUser?.password as any)) {
            Prisma.$disconnect()


            const tokenData = {
                id: CurrentUser?.id,
                role: CurrentUser?.role,
                email: CurrentUser?.email,
                username: CurrentUser?.username,
            }


            const token = await jwt.sign(
                tokenData,
                process.env.TOKEN_SECRET!,
                {expiresIn: '9h'}
            )


            const response = NextResponse.json({validate: true, identity: ''}, {status: 200})
            response.cookies.set('token', token, {httpOnly: true})

            return response
        }
    }
    catch(error: any) {
        return NextResponse.json(
            {
                validate: 'false'
            },
            {
                status: 209
            }
        )
    }
}
