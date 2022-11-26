const express = require("express")
const router = express.Router()

router.use('/public', express.static('public'));  
router.use('/public', express.static(__dirname + '/public'));  // Ruta para archivos estáticos

//const conexion = require("../database/db")
const conexion = require("./database/conexiondb");      // Conexión a la base de datos
const uploadFile = require("./controllers/SubirArchivo"); // Controlador de subida de archivos



router.get("/listatareas", (req, res)=>{  
    conexion.query("SELECT * FROM tareas", (error,results)=>{  // Consulta a la base de datos
        if(error){
            throw error;
        }else{
            res.render("UsuarioTareas", {results:results},);  // Renderizamos la vista
        }
})
})


router.get("/", (req, res)=>{
    conexion()
    res.render("index")
})

router.get("/admin", (req, res)=>{ 
    res.render("admin");
})

router.get("/", (req, res)=>{
    res.render("login")
})

router.get("/registro", (req, res)=>{
    res.render("registro")
})

router.get("/recuperarcontra", (req, res)=>{
    res.render("RecuperarContra");
})

router.get("/subida", (req, res)=>{
    res.render("subida");
})

router.post("/subir", uploadFile() ,(req, res)=>{
    console.log(req.file.path);
})

router.post("/archivos" ,(req, res)=>{
   res.render("archivos");
})


module.exports = router