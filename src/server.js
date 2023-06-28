const express = require('express');
const cors = require('cors');

const app = express();

// Habilitar CORS
app.use(cors());

// Resto de tu configuración y rutas
// ...

// Inicia el servidor
app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});
