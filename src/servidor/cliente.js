const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    nombre:{type:String,requiere:true},
    edad:{type:Number, requiere: true},
    telefono:{type:String,requiere:false},
    empresa:{type:String,requiere:true}
});

module.exports = mongoose.model('cliente',ClienteSchema);