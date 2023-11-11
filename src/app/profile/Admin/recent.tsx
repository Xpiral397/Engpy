import React, {Dispatch, SetStateAction, createContext, useContext} from "react";



export interface RecentActivity {
    recentLinks: {link: string, name: string}[]
    setRecentLinks: Dispatch<SetStateAction<{link: string, name: string}[]>>
}

export const Recent = createContext<RecentActivity | undefined>(undefined)

export function useRecentLink() {
    const context = useContext(Recent)
    if(context === undefined) {
        throw new Error('useRecentLink must be use under the within the contex of RecentLinksProvider')
    }
    return context;
}

