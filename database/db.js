const mongoose = require('mongoose');

mongoose.connect(process.env.URI)
    .then(() => console.log('DB conectada...🔥 '))
    .catch(e => console.log('falló la conexión ' + e));