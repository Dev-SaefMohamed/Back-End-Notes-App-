import {noteModel} from '../../../DB/model/note.model.js'

const addNote = async (req,res)=>{
    let {title, description, createdBy} = req.body
     await noteModel.insertMany({title, description, createdBy})
     res.json({message:"success"})
    
}
const updateData = async (req,res) => {
    let {title, description, _id} = req.body
    let note = await noteModel.findByIdAndUpdate(_id,{title, description},{new:true})
    if(note){
        res.json({message:"success",note})
    }
    else{
       res.json({message:"Error 404 Not Found"})
    }
}
const deleteNotes = async (req,res)=>{
    let {_id} = req.body;
    let note = await noteModel.findByIdAndDelete(_id)
    if(!note) {return res.json({message:"Error 404 Not found"})}
    res.json({message:"success"})
}
const getAllNotes = async (req,res) => {
     let note = await noteModel.find().populate("createdBy","name")
     res.json({message:"success",note})  
   
}
const getUserNote = async (req,res)=>{
    let {createdBy} = req.params;
    let noteUser = await noteModel.find({createdBy})
    res.json({message:"success",noteUser})
 }
export{
    addNote,
    updateData,
    deleteNotes,
    getAllNotes,
    getUserNote
}