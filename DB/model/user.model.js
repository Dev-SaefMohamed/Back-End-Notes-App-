import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export let userModel = mongoose.model("user",userSchema);