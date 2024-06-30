import express from 'express';
import { addNote, 
         deleteNotes, 
         getAllNotes, 
         getUserNote, 
         updateData } from './note.controller.js';
import  {Auth}  from '../../midleware/Auth.js';
//import { noteModel } from '../../../DB/model/note.model.js';
let noteRouter = express.Router()

// add note
noteRouter.post("/",Auth,addNote)
// update note
noteRouter.put("/",Auth,updateData)
// delete note
noteRouter.delete("/",Auth,deleteNotes)
// get all note
noteRouter.get("/",Auth,getAllNotes)
// get user note
noteRouter.get("/:createdBy",Auth,getUserNote)
export default noteRouter;