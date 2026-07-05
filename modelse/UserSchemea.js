import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        uniqe: true,
        require:true
    } ,
    

    password: String,
    role : {
        type: String,
        default:"user",
    }
})

const User = mongoose.model("User", UserSchema);
export default User;