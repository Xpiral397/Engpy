
'use client'

import {ReactNode} from "react"
import React from "react"

export default function Apps({children}: {children: ReactNode}) {
    return <div className>
        {children}
    </div>
}