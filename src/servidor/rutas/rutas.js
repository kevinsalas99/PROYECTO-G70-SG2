const express = require ("express");
const router = express.Router();


router.get("/", (req,res) => {
    console.log("ingreso raiz");
    res.send("Hola mundo");
});

module.exports = router;