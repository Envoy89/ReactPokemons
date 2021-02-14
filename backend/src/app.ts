import express from 'express';
import router from './routes/api';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use(router);

const port = 3000;
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});