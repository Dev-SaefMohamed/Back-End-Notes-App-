import mongoose from "mongoose";

let noteSchema = mongoose.Schema({
    title:String,
    description:String,
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "user"
    }
    
})
export let noteModel = mongoose.model("note",noteSchema)