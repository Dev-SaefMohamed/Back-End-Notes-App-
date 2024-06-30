import jwt from "jsonwebtoken"

export const Auth = (req,res,next) => {

    let token = req.header("token")

    jwt.verify(token,"iTrustInGod",(error,decoded)=>{
        if(error){
            res.json({message:"error",error})
        }else{
            next()
        }
    })
} 