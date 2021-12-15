import mongoose from 'mongoose';

let jwtTokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    userId: {
        type: String //type should be mongoose doc ID
    },
    exp: {
        type: Number
    }
})

let JwtToken = mongoose.model("JWTTokens", jwtTokenSchema);
export default JwtToken;