var express = require('express');
var app = express();
var sql = require("mssql");
var bodyParser = require("body-parser");

// var config = {
//     user: 'DESKTOP-LM4O5BJ/josel',
//     password: '',
//     server: 'localhost', 
//     database: 'Laboratorio_1' 
// };

const alumnoController = require('./controllers/alumnoController');

var config = {
    user: 'sa',
    password: 'HolaMundo123!',
    server: '157.230.76.73',
    database: 'PRUEBA' 
};

// connect to your database
var request = null;
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    request = new sql.Request();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    req.con = request;
    next();
});

app.get('/alumno', alumnoController.index);
app.post('/alumno', alumnoController.create);
app.put('/alumno', alumnoController.update);
app.delete('/alumno',alumnoController.delete);

var server = app.listen(5000, function () {
    console.log('Server is running..');
});

