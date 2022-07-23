const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a la pagina principal!!!!')
});

app.use(express.static('public'));


app.listen(3000, () => console.log('Proyecto en el puerto 3000'));