
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var helpers = require('handlebars-helpers')();

var index = require('./routes/index');
var home = require('./routes/home');
var product = require('./routes/product');
var buy = require('./routes/buy');
var addReview = require('./routes/addReview');
var add = require('./routes/add');

//var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({
  helpers: {
    helpers,
    urlFetch: (retailLink, index, productURL) => {
      return retailLink[index][productURL];
    }
  },
  partialsDir: ['views/partials/'],
  defaultLayout: false
}));
app.set('view engine', 'handlebars');
app.use(express.favicon("public/images/favicon_io/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Example route
// app.get('/users', user.list);

app.get('/', index.view);
app.get('/home', home.view);
app.post('/home', home.view); // fake login
// By Elise - Product information page
app.get('/product/:id', product.view)
app.get('/product/:id/buy', buy.view)
app.get('/addReview', addReview.view);
app.get('/add', add.addProduct);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
