import express,{Router, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
const router:Router = Router()

//1. Definir rutas

router.get(
    '/mensaje',
    (req:Request, res:Response)=>{
        res.send('Hoy es un dia fabuloso!!')
    }
)

router.get(
    '/despedida',
    (req:Request, res:Response)=>{
        res.send('Hasta pronto!!')
    }
)

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
    '/login',
    (req:Request, res:Response)=>{
       
        const payload = {
            id:"user_id",
            username:"julian"
        }

        const options = {
            expiresIn:"2h"
        }
        const secretKey= process.env.SECRET_KEY

        if(typeof secretKey == 'string'){
            const token = jwt.sign(payload, secretKey, options)
            res.json({token})
        }

        
    }
)

export default router