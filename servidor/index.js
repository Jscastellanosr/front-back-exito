const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')


//crear servidor
const app = express();


//conectar a bd

conectarDB();
app.use(cors());

app.use(express.json())

//creacion de USUARIO
app.use('/api/usuarios', require('./routes/usuario'))

//creación de EMPLEADO
app.use('/api/empleados', require('./routes/empleado'))

//solicitudes
app.use('/api/solicitudes', require('./routes/solicitudes'))


app.listen(4000, ()=>{
    console.log('el servidor funciona correctamente')
})

