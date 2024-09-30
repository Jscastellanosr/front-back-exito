const mongoose = require('mongoose');


const SolicitudSchema = mongoose.Schema({

    producto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fechaCompra: {
        type: String,
        required: true
    },
    fechaEntrega: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    entregado: {
        type: Boolean,
        required: true
    },
    idCliente: {
        type: String,
        required: true
    },
    idConductor: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Solicitud', SolicitudSchema)