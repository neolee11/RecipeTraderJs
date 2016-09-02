var express = require('express');
var appRouter = require('./src/routes/appRoutes');
// var sql = require('mssql') //use prepared statements for parameterized queries
//use middleware body-parser
//use middleware passport
//use cookie-parser
//use express-session (passport uses it)
//use http
//use xml2js


var app = express();
var port = 5000;
app.use(express.static('public'));
app.set('views', './src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', appRouter);

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
