import app from "./app";

const puerto = 3001

app.listen(
    puerto,
    ()=>{
        console.log(`Servidor ejecutado en puerto ${puerto}`)
    }
)

