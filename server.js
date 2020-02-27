const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res) {

//     let salida = {
//         nombre: 'Victor',
//         apellido: 'Jaramillo',
//         url: req.url
//     }
//     res.send(salida);
// });


// app.get('/data', function(req, res) {

//     res.send('Hola data');
// });

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');

}); 