// import {Pool} from 'pg'




// export async function connect() {
//     const db = new Pool({

//     })
// }


const mongoose = require('mongoose')


export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('Connected Succesfully')
            // process.exit()
        })


        console.log(connection)
        connection.on('error', () => {
            console.log('Error Connected Succesfully')
        })


    } catch(error: any) {
        console.log(error)
    }
}



