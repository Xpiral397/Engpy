import {ReferalCode, UniquesUserAuth} from "@/types/componentBased/types";
import {UserArgs} from "@prisma/client/runtime/library";
import axios from "axios";
import {NextResponse} from "next/server";
import {URLSearchParams} from "url";

export class AuthUser {
    email: string | undefined | null;
    mobile: string | undefined | null;
    username: string | undefined | null;
    password: string | undefined | null;
    args: UniquesUserAuth
    params: URLSearchParams
    getUserParam: URLSearchParams
    referalCode: ReferalCode | undefined | null;
    constructor(args: UniquesUserAuth) {
        this.email = args?.email;
        this.mobile = args?.mobile;
        this.username = args?.username;
        this.referalCode = args?.referalCode;
        this.password = args?.password;
        this.params = new global.URLSearchParams(
            {
                email: encodeURIComponent(this.email as string),
                mobile: this.mobile as string,
                username: this.username as string,
                password: this.password as string,
                referalCode: JSON.stringify(this.referalCode)
            }
        )
        this.getUserParam = new global.URLSearchParams(
            {
                email: encodeURIComponent(this.email as string),
                mobile: this.mobile as string,
                username: this.username as string,
                password: this.password as string,
                referalCode: JSON.stringify(this.referalCode)
            }
        )
        this.args = args
    }
    alreadyExit() {
        try {
            const result = fetch(`/api/utilis/authenticate?${this.params.toString()}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log('Fectched Succeffully', result)
            return result;

        }
        catch(e) {
            return e
        }
    }

    getUserIFExit() {
        try {
            const new_params = new global.URLSearchParams(
                {
                    UsernameOrEmail: encodeURIComponent(this.email as string),
                    password: this.password as string,

                }
            )
            const result = fetch(`/api/users/login?${new_params.toString()}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log('Fectched Succeffully', result)
            return result;

        }
        catch(e) {
            return e
        }
    }
}

