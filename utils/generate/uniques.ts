import {v4 as getID} from 'uuid'


export class Uniques {
    value: string;
    constructor(value: string) {
        this.value = value;
    }
    generateUniqueUserId(max: number, min: number) {
        return getID()
    }
    getUserId(value: string) {
        this.value = this.value ? this.value : value
        const userName = `${this.value}@${Math.floor(Math.random() * 9000) + 4000}`
        return userName
    }
}
