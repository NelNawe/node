const express = require('express')
const hostname = "0.0.0.0";//definir le hostname et le port quand on est sur window
const port = 3000;
const server = express();
const mongose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(express.urlencoded());
server.use(express.json());
const postRoute = require('./api/routes/postRoutes'); //les routes vont etre passées au serveur
postRoute(server); //faire la connexion à la base de donnée

const commentRoute = require('./api/routes/commentRoute');
server.use("./api/routes", commentRoute);

server.listen(port.hostname); //tourner le serveur
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
