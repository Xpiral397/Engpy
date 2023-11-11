import {ReferalCode, UniquesUserAuth} from "@/types/componentBased/types"
import {PrismaClient} from "@prisma/client"
import {Passions_Conflict} from "next/font/google"
import {NextRequest, NextResponse} from "next/server"
import {stringify} from "querystring";
import {parse} from 'url';
const db = new PrismaClient()

async function userIdExit(userid: string) {
    return await db.profile.findFirst({
        where:
        {
            id: userid
        }
    }
    ) === null
}

async function userNameExit(username: string) {
    return await db.user.findFirst(
        {
            where:
            {
                profile: {
                    username
                }

            },
            include: {
                profile: true,
            }

        }
    ) !== null
}

async function userEmailExit(email: string) {
    console.log(email, decodeURIComponent(email))
    return await db.profile.findFirst(
        {
            where:
            {

                email: decodeURIComponent(email)


            },

        }
    ) !== null
}
async function userMobileExit(mobile: string) {
    return await db.profile.findFirst(
        {
            where:
            {
                mobile
            }

        }
    )
        !== null
}

async function userFirstNameExit(firstName: string) {
    return await db.user.findFirst(
        {
            where:
            {
                profile: {
                    firstName
                }

            },
            include: {
                profile: true,
            }

        }
    ) === null
}
async function checkIfPassWordAlreadyExist(password: string) {
    return await db.profile.findFirst(
        {
            where:
            {
                password

            }
        }
    ) !== null
}
async function userValidateReferalCode(input: ReferalCode) {
    return !db.referal.findFirst(
        {
            where:
            {
                referId: input.ID,
                code: input.code
            }

        }
    ) === null
}
async function ValidateUsernameAlreadyExist(username: string) {
    return db.profile.findFirst(
        {
            where:
            {
                username,
            }

        }
    ) !== null
}




export async function GET(request: NextRequest) {

    try {
        const referalCodes = new URL(request.url).searchParams.get('code')
        const usernames = new URL(request.url).searchParams.get('username')
        const passwords = new URL(request.url).searchParams.get('password')
        const mobiles = new URL(request.url).searchParams.get('mobile')
        const emails = new URL(request.url).searchParams.get('email')
        const code = new URL(request.url).searchParams.get('email')
        const emailsZZZZ = new URL(request.url).searchParams.get('ID')
        const Merge: UniquesUserAuth = {email: emails, referalCode: JSON.parse(referalCodes as string), username: usernames, password: passwords, mobile: mobiles}
        const {email, username, mobile, password, referalCode} = Merge
        const constrain: UniquesUserAuth = {email, username, mobile, password, referalCode}
        const RegParams: {[key in keyof UniquesUserAuth]: string} = {};
        const callbackFunction: {[key in keyof UniquesUserAuth]: any} = {
            email: userEmailExit,
            mobile: userMobileExit,
            username: userNameExit,
            password: checkIfPassWordAlreadyExist,
            referalCode: userValidateReferalCode
        }

        for(const key in constrain) {
            if(constrain[key as keyof UniquesUserAuth])
                RegParams[key as keyof UniquesUserAuth] = await callbackFunction[key as keyof UniquesUserAuth](Merge[key as keyof UniquesUserAuth])
        }

        return NextResponse.json(
            {
                ...RegParams,
            },
            {
                status: 200
            }
        )
    }
    catch(error) {
        return NextResponse.json({message: `Errors Verifying the Data existence:${error}`})
    }

}