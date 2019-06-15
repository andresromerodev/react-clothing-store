import express from 'express';
import UserModel from './models/User';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('App listening on port 8080!');
});
