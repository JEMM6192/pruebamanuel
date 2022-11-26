const { Router } = require("express")
const mysql = require("mysql")
const router = require("../routes/router")

const conexion = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,

})


conexion.connect( (error)=> {
    if(error){
        console.log("error de conexion" +error)
        return
    }
    console.log("¡Conectado a la Base de Datos Correctamente!")
    
})

module.exports =router;

