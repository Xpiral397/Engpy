import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';
import {NextResponse} from 'next/server';
import bcryptjs from 'bcryptjs'
import {Roles} from '@/utils/data/enums';
import {Uniques} from '@/utils/generate/uniques';


export async function POST(request: any, response: NextApiResponse) {
    if(request.method !== 'POST') {
        return NextResponse.json({message: 'Method Not Allowed'}, {
            status: 209
        });
    }
    const db = new PrismaClient()
    const Unique: Uniques = new Uniques('')
    const {FirstName, LastName, email, password, Role, mobile, continent, gender, Experience} = await request.json();
    const passwords = await bcryptjs.hash(
        password,
        await bcryptjs.genSalt(10)
    )
    try {
        const savedUser = await db.user.create({
            data: {

                id: Unique.generateUniqueUserId(3322, 3212)
            }

        })

        const Profile = await db.profile.create({
            data: {
                userId: savedUser.id,
                id: Unique.generateUniqueUserId(5999, 9383),
                username: Unique.getUserId(FirstName?.replace(/s+$/).split(' ')[0]),
                firstName: FirstName,
                lastName: FirstName,
                role: Role,
                email,
                mobile,
                continent,
                gender,
                password: passwords,
            }

        })
        return NextResponse.json({message: 'User created successfully'}, {status: 201});
    }

    catch(error: any) {
        return NextResponse.json({
            message: `An error occurred while creating the user `,
            error: error.message, // Include the error message for debugging
        });
    }
}
