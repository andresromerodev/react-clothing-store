import express from 'express';
import UserModel from './models/User';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';

const user1 = new UserModel({
    id: '44jweqmw03f',
    username: 'jondoe',
    email: 'jondoe@gmail.com',
    role: 'admin',
});

const user2 = new UserModel({
    id: 'gdfgh43tws2e',
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    role: 'customer',
});

const users = [user1.getData(), user2.getData()];

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(withAuthentication);
app.use(logger);

// const middleware = (req, res, next) => {
//     // do some logic
//     // [m1] -> [m2] -> [m3] -> handler();
//     next();
// };

app.get('/v1/users', (req, res) => {
    res.send(users);
});

app.get('/v1/users/:id', (req, res) => {
    res.send(user1);
});

app.post('/v1/users', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    console.log('post: data => ', username, email, role);    

    res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const email =  req.body.email;
    const role = req.body.email;
    console.log('put: data => ', id, username, email, role);
    
    res.send(200).end();
});

app.listen(port, () => {
    console.log('App listening on port 8080!');
});
