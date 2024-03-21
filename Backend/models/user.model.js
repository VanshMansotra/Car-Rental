import mongoose, {Schema} from "mongoose";

const userSchema=new Schema(
    {
        username: {
            type: String,
            required: [true,'username is required'],
            unique: [true,'Username should be unique']
        },
        email: {
            type: String,
            required: [true,'Email is required'],
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true,'Password is required'],
        },
        avatar:{
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        },
    },
    { timestamps: true }
);

export const User=mongoose.model("User",userSchema);