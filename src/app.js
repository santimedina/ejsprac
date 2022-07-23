const express = require('express');
const app = express();

//Registra ejs como motor de plantillas
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, '/views'));
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.send('Bienvenido a la pagina principal!!!!')
});

//Registra como publica/static la carpeta public
app.use(express.static('public'));

// Registra carpetas estaticas con "prefijos"
app.use('/prefijo', express.static('publica'));


app.get('/index', (req, res) => {
    res.render('index');
})

app.listen(3000, () => console.log('Proyecto en el puerto 3000')); 