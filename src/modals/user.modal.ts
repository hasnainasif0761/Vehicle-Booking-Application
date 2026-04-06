import mongoose, { Document } from "mongoose";

interface IUser extends Document {
    name: string;
    email:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
}

const userSchema = new mongoose.Schema<IUser>({},{});