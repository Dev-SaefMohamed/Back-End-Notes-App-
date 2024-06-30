import mongoose from "mongoose";

export function dbConnection(){
    mongoose.connect('mongodb://127.0.0.1:27017/data-notes')
    .then(()=> console.log("DB connected"))
    .catch((error)=> console.log(error));
}