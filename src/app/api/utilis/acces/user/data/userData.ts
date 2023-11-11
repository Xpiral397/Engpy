import {OptionProfile} from "@/types/componentBased/types"
import {PrismaClient, Profile} from "@prisma/client"



class GetUserProfile {
    dataProps: OptionProfile
    constructor(payLoads: OptionProfile) {
        this.dataProps = payLoads
    }
    add(payLoads: OptionProfile) {
        this.dataProps = {...this.dataProps, ...payLoads}
    }
    async getAllByContinet() {
        if(!this.dataProps.mobile) return {} as Profile
        const db = new PrismaClient();
        return await db.profile.findMany({
            where: {
                continent: this.dataProps.continent
            }
        })
    }
    async getByMobile() {
        if(!this.dataProps.mobile) return {} as Profile
        const db = new PrismaClient();
        return await db.profile.findMany({
            where: {
                continent: this.dataProps.mobile
            }
        })
    }
    async getAllDataTargetsChanges() {
        const db = new PrismaClient();
        return await db.dataTargets.findMany()
    }
    async getByID() {
        if(!this.dataProps.userId) {
            return {} as Profile
        }
        const db = new PrismaClient();
        return await db.profile.findMany({
            where: {
                id: this.dataProps.userId
            }
        })
    }
    async getByGender() {
        if(!this.dataProps.gender) return {} as Profile
        const db = new PrismaClient();
        return await db.profile.findMany({
            where: {
                continent: this.dataProps.gender
            }
        })
    }
    async getByEmail() {
        const db = new PrismaClient();
        if(!this.dataProps.email) return {} as Profile
        return await db.profile.findMany({
            where: {
                continent: this.dataProps.email
            }
        })
    }
    async getByRole() {
        if(this.dataProps.role) {
            const db = new PrismaClient();
            return await db.profile.findMany({
                where: {
                    continent: this.dataProps.role
                }
            })
        }
        return {} as Profile

    }
}



export {
    GetUserProfile
}