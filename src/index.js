const express = require ("express");
const morgan = require ("morgan");
const path = require ("path");

const app = express();

//Ajustes
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use("/", require("./rutas/rutas"));

//Archivos estaticos
app.use(express.static(path.join(__dirname, "cliente")));

app.listen(4000, function(){
console.log("servidor iniciado en el puerto " + app.get("port"));
});