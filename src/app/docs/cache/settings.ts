
import {useContext, createContext, Dispatch, SetStateAction} from "react";

export type color = 'white' | "dark"
export interface SettingProps {

    theme: color,
    showRecent: boolean
    showSideBar: boolean
    textSize: Number

}
export interface Settings {
    setting: SettingProps
    setSettings: Dispatch<SetStateAction<SettingProps>>
}

export const Setting = createContext<Settings | undefined>(undefined)

export function useSetting() {
    const settingContext = useContext(Setting)
    if(settingContext === undefined) {
        throw Error('Make sure useSettings is use under useSettingsProvider')
    }
    return settingContext
}