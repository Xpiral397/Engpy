import mongoose, {Schema} from "mongoose";


const UserSchema = new Schema({
    TestPointer: {
        type: Boolean,
        default: false
    },
    SimpleUser: {
        type: Boolean,
        default: false
    },
    Admin: {
        type: Boolean,
        default: false
    },
    Username: {
        type: String,
        require: [true, 'Please provide a valid name'],
        unique: true
    },
    OtherName: {
        type: String,
        unique: true,
        require: [true, 'Please provide a valid name']
    },
    Number: {
        unique: true,
        type: String,
        require: [true, 'Please provide a mobile number']
    },
    email: {
        unique: true,
        type: String,
        require: [true, 'Please provide a email valid name']
    },
    Password: {
        unique: true,
        type: String,
        require: [true, 'Please provide a password']
    },
    verifyToken: String,
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date
}
)

const User = mongoose.models.Users || mongoose.model('Users', UserSchema)

export default User;