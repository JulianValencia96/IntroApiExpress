import express,{Application, Request, Response, NextFunction} from 'express'
import passport, { initialize } from 'passport'
import rutas_ejemplo from './routes/rutas_ejemplo'
import rutas_auth from  './routes/authRoutes'
import miEstrategia from './config/passport'

import dotenv from 'dotenv'
dotenv.config()

//1. Crear un objeto Express

const app:Application= express()

//1.1 Emplear las rutas

app.use('/auth', rutas_auth)
/*passport.use(miEstrategia)
app.use(passport.initialize())
app.use('/', passport.authenticate('jwt', {session:false}), rutas_ejemplo)

*/

//2. Respuesta cuando el recurso no existe

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:'Ups!!! Lo que pidio no existe'})
})



export default app