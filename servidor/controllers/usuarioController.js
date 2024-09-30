const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res)=>{
   
    try {
        let usuario;

        //creamos el usuario
        usuario = new Usuario(req.body);
        await usuario.save();
        res.send(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerUsuarios = async (req, res)=>{

    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarUsuario = async (req, res)=>{
    try {
        const {nombres, apellidos, correo, cedula, telefono, direccion, password} = req.body;

        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'})
        }

        usuario.nombres = nombres;
        usuario.apellidos = apellidos;
        usuario.correo = correo;
        usuario.cedula = cedula;
        usuario.telefono = telefono;
        usuario.direccion = direccion;
        usuario.password = password;

        await Usuario.findOneAndUpdate({ _id: req.params.id}, usuario, {new: true})
        res.json(usuario)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
       
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'})
        }


        res.json(usuario)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
       
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'})
        }

        await Usuario.findOneAndDelete({ _id: req.params.id})
        res.json({ msg: 'usuario eliminado exitosamente'})

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un erroor')
    }

}

exports.buscarPorCorreo = async (req, res)=>{
    try {
       
        let usuario = await Usuario.find({correo: req.params.correo});

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'})
        }


        res.json(usuario)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}