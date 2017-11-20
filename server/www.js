const app = require('./app');

const port = 8080;

app.listen(port, (err) => {
  if (err) {
    console.log('Что-то плохое', err);
  }
  console.log(`server is listening ${port}`);
});
