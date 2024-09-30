const mongoose = require('mongoose');


const UsuarioSchema = mongoose.Schema({

    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },direccion: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema)