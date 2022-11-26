const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path")

const app = express();


//seteamos el motro de plantillas
app.set("view engine", "ejs")

//seteamos la carpeta public para archivos estaticos
app.use(express.static("public"))


//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: "./env/ .env"})

//para poder trabajar con las cookies
//app.use(cookieParser)

//Routing//
app.use("/", require("./routes/router"))


app.get("/", (req, res)=>{
    res.send("INICIANDO LOGIN EN EL BACKEND");
})

/*app.get("/*", (request, response)=>{
    response.sendFile(path.resolve(__dirname, "index.html"));
}) */


app.listen(3000,() => {
    console.log("Servidor Ejecutandose http://localhost:3000");
})