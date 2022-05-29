const { urlencoded } = require('express');
const express = require('express');
const { create } = require('express-handlebars');
require('dotenv').config();
require('./database/db');
const app = express();
const PORT = process.env.PORT || 5000;


// Para indicar la extension .hbs y no handlebars 
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/components'],
});


// Motor de plantilla
app.engine('.hbs', hbs.engine);

// La extension del motor va a ser .hbs
app.set('view engine', '.hbs');

// Indicar que los archivos de nuestro motor va a estar en la carpeta views
app.set('views', './views');

// Middleware
app.use(express.static(__dirname + '/public'));

// Habilitar envio de informacion por formulario
app.use(express.urlencoded({extended: true}));

// Router
app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));


app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));