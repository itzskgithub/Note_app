import mongoose from "mongoose";

const connectDB = async () => {
    const mongoUrl = process.env.Mongo_Url;

    if (!mongoUrl) {
        throw new Error("Mongo_Url is not defined in .env");
    }

    try {
        await mongoose.connect(mongoUrl);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
}

export default connectDB;
