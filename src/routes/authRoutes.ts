import express,{Router, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
const router:Router = Router()

//1. Definir rutas


router.get(
    '/aleatorio',
    (req:Request, res:Response)=>{
        const min = 1;
        const max = 10000;
        const randomNumber = Math.floor(Math.random() * (max-min + 1)) + min;
        res.send(randomNumber.toString())
    }
)


router.get(
    '/token',
    (req:Request, res:Response)=>{

        const payload = {
            id:"user_id",
            username:"paulo"
        }

        const options = {
            expiresIn:"2h"
        }
        const secretKey= process.env.SECRET_KEY
//Validacion token
        if(typeof secretKey == 'string'){
            const token = jwt.sign(payload, secretKey, options)
            res.json({token})
        }
    }
)


export default router