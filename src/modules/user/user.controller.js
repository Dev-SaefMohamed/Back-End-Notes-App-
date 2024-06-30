import jwt from "jsonwebtoken";
import { userModel } from "../../../DB/model/user.model.js";
import bcrypt from "bcrypt";

const signUp = async (req,res)=>{
    let {name, email, password} = req.body
    let user = await userModel.findOne({email});
    
    if(user){ res.json({message:"this email is already exist"}) }
   // else if(!user){ res.json({message:"error 404 not found"}) }
    else{
        const hash = bcrypt.hashSync(password, 3);
        userModel.insertMany({name, email, password:hash})
        res.json({message: "success"})
    }
}

const signIn = async (req,res)=>{
    let {email, password} = req.body;
    let user = await userModel.findOne({email})
    if(user && bcrypt.compareSync(password, user.password)){
       let token = jwt.sign({id:user.id, name:user.name},"iTrustInGod")
       
       res.json({message: "log In Success",token})
    }
    else{
        res.json({message:"Error Your Email Or Password is Wrong"})
    }
}

export {
    signUp,
    signIn
}