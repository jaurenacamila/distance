//se importa asi por el module de package.json
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { serverPort } from './config/config.js';

const app = express();
const PORT = serverPort || 3000;

app.use(bodyParser.json());
app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});