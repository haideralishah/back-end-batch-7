import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})


let User = mongoose.model("user", userSchema);

export default User;