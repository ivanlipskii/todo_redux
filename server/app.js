var express = require('express');
var knex = require('./config');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
var port = 8080;

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

router.route('/')
  .get((req, res) => {
    knex('cities').orderBy('id', 'inc')
      .then((collection) => {
        res.json(collection);
      })
      .catch((error) => {
        res.status(501).json(error);
      });
  })
  .post((req, res) => {
    knex('cities').insert({ city: req.body.city })
      .then(id => res.json(id[0]))
      .catch(error => res.status(502).json(error));
  })
  .delete((req, res) => {
    knex('cities').where('id', req.body.id).del()
      .then(count => res.json(count))
      .catch(error => res.status(503).json(error));
  });


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', router);

app.listen(port, (err) => {
  if (err) {
    console.log('Что-то плохое', err);
  }
  console.log(`server is listening ${port}`);
});
