const http = require('./app');

const port = 8080;

http.listen(port, (err) => {
  if (err) {
    console.log('Что-то плохое', err);
  }
  console.log(`server is listening ${port}`);
});
