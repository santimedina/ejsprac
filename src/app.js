const express = require('express');
const app = express();
const path = require('path')

// Registra ejs como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));





// Registra como publica/static la carpeta public
app.use(express.static('public'));

// Registra carpetas estaticas con "prefijos"
app.use('/desktop', express.static('desktop'));
app.use('/mobile', express.static('mobile'));

app.get('/', (req, res) => {
    res.render('index', {
        usuario: [
            {
                name: "Santiago",
                email: "sjmedi.97@gmail.com"
            },
            {
                name: "Julian",
                email: "Julian@gmail.com"
            },
            {
                name: "Victoria",
                email: "Victoria@gmail.com"
            }



        ]
    });


})



app.get('/index', (req, res) => {
    res.render('index');
})

app.listen(3000, () => console.log('Proyecto en el puerto 3000')); 