const Empleado = require("../models/Empleado");

exports.crearEmpleado = async (req, res)=>{
   
    try {
        let empleado;

        //creamos el empleado
        empleado = new Empleado(req.body);
        await empleado.save();
        res.send(empleado);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerEmpleados = async (req, res)=>{

    try {
        const empleados = await Empleado.find();
        res.json(empleados);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarEmpleado = async (req, res)=>{
    try {
        const {nombres, apellidos, correo, cedula, telefono, password} = req.body;

        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({ msg: 'No existe el empleado'})
        }

        empleado.nombres = nombres;
        empleado.apellidos = apellidos;
        empleado.correo = correo;
        empleado.cedula = cedula;
        empleado.telefono = telefono;
        empleado.password = password;

        await Empleado.findOneAndUpdate({ _id: req.params.id}, empleado, {new: true})
        res.json(empleado)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerEmpleado = async (req, res) => {
    try {
       
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({ msg: 'No existe el empleado'})
        }


        res.json(empleado)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarEmpleado = async (req, res) => {

    try {
       
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({ msg: 'No existe el empleado'})
        }

        await Empleado.findOneAndDelete({ _id: req.params.id})
        res.json({ msg: 'empleado eliminado exitosamente'})

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un erroor')
    }

}

exports.buscarPorCorreo = async (req, res)=>{
    try {
       
        let empleado = await Empleado.find({correo: req.params.correo});

        if(!empleado){
            res.status(404).json({ msg: 'No existe el empleado'})
        }


        res.json(empleado)

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}