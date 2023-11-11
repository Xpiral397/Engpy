
import {Expriences, Lang} from "@prisma/client";
import {Gender, Roles} from "./enums";
import {Interface} from "readline/promises";


export interface Exprience {
    lanaguage: Lang,
    Year: number,
    Projects: string[] | string
}

export interface UserSignup {
    FirstName: string,
    LastName?: string
    Surname: string,
    email: string
    Gender: Gender,
    mobile: string,
    country: string,
    continent: string,
    password: string,
    username?: string,
    referCode: string,
    accountType: Roles,
    password1: string,
    password2: string,
    Role: Roles,
    Experince?: Exprience[]

}

export interface UserLogin {
    password: string,
    email: string,
    username?: string
}


