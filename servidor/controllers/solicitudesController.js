const Solicitud = require("../models/Solicitud");

exports.crearSolicitud = async (req, res)=>{
   
    try {
        let solicitud;

        //creamos el empleado
        solicitud = new Solicitud(req.body);
        await solicitud.save();
        res.send(solicitud);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerSolicitudes = async (req, res)=>{

    try {
        const solicitud = await Solicitud.find();
        res.json(solicitud);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarSolicitud = async (req, res)=>{
    try {
        const {producto, precio, fechaCompra, fechaEntrega, direccion, entregado, idCliente, idConductor} = req.body;

        let solicitud = await Solicitud.findById(req.params.id);

        if(!solicitud){
            res.status(404).json({ msg: 'No existe la solicitud'})
        }

        solicitud.producto = producto;
        solicitud.precio = precio;
        solicitud.fechaCompra = fechaCompra;
        solicitud.fechaEntrega = fechaEntrega;
        solicitud.direccion = direccion;
        solicitud.entregado = entregado;
        solicitud.idCliente = idCliente;
        solicitud.idConductor = idConductor;

        await Solicitud.findOneAndUpdate({ _id: req.params.id}, solicitud, {new: true})
        res.json(solicitud)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerSolicitud = async (req, res) => {
    try {
       
        let solicitud = await Solicitud.findById(req.params.id);

        if(!solicitud){
            res.status(404).json({ msg: 'No existe la solicitud'})
        }


        res.json(solicitud)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarSolicitud = async (req, res) => {

    try {
       
        let solicitud = await Solicitud.findById(req.params.id);

        if(!solicitud){
            res.status(404).json({ msg: 'No existe el solicitud'})
        }

        await Solicitud.findOneAndDelete({ _id: req.params.id})
        res.json({ msg: 'solicitud eliminada exitosamente'})

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un erroor')
    }

}


exports.buscarPorclienteId = async (req, res)=>{
    try {
       
        let solicitud = await Solicitud.find({idCliente: req.params.clienteId});

        if(!solicitud){
            res.status(404).json({ msg: 'No existe la solicitud'})
        }


        res.json(solicitud)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.buscarPorconductorId = async (req, res)=>{
    try {
       
        let solicitud = await Solicitud.find({idConductor: req.params.conductorId});

        if(!solicitud){
            res.status(404).json({ msg: 'No existe la solicitud'})
        }


        res.json(solicitud)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}