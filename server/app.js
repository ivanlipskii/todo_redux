const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const api = require('./routes/api');

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', api);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('action', (action) => {
    if (action.type === 'server/addCityForRest') {
      socket.broadcast.emit('addNewCity', action.city);
    } else if (action.type === 'server/removeCityForRest') {
      socket.broadcast.emit('removeCity', action.id);
    }
  });
});

module.exports = http;

