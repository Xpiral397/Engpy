import {Gender, Role} from '@prisma/client';
import React from 'react'
export type StringOrNumber = string | Number

export interface InputDataProps {
    width?: StringOrNumber,
    heigh?: StringOrNumber,
    size?: string
}
export interface ReferalCode {
    code: string;
    ID: string
}
export interface UniquesUserAuth {
    email?: string | null,
    mobile?: string | null,
    username?: string | null,
    password?: string | null,
    referalCode?: ReferalCode | null;

}

export interface UserViatalLoginAttribute {
    email: string,
    role: Role,
    username: string,
    firstName: string,
    lastName: string

}
export interface OptionProfile {
    id?: string
    gender?: Gender
    role?: Role
    password?: string
    mobile?: string
    email?: string
    userId?: string
    continent?: string
    firstName?: string
    lastName?: string
    username?: string
    experienceId?: string | null
    exprienceId?: string | null
}

export interface Model {
    img?: string
    imgs?: React.ReactElement,
    heading?: String,
    content?: String,
    Link?: String,
    button?: String,
    LinkContent?: String
    children?: React.ReactNode
}

export interface IconSvgProps {
    onClick?: () => void,
    className?: String,
    fontSize?: Number | String
}



