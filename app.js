const express = require('express');
const app =  express();
const hbs = require('hbs');
const path = require('path');





// Configuración del motor de plantillas HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));



app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

const routes = require('./routes/routes')
app.use(routes)



app.listen(3000, (req,res)=> {
	console.log('Servidor online en puerto 3000')
})