import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/Car`)
        .then(console.log("MongoDB connected succesfully"));
    } catch (error) {
        console.log("Mongo connection error: ",error);
        process.exit(1);
    }
}

export default connectDB;