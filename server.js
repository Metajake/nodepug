var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
const pug = require('pug');

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/css', express.static(__dirname+"/css"));
app.use('/js', express.static(__dirname+"/js"));
app.use('/assets', express.static(__dirname+"/assets"));

app.get('/', function(req, res){
  res.render('index', {name: "Timothy"})
});

server.listen(process.env.PORT || 8081, function(){
  console.log('Listening on ' + server.address().port);
})
