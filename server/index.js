import db from './db';
import express from 'express';
import {UserModel} from './models/User';
import {ProductModel} from './models/Product';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(withAuthentication);
app.use(logger);

app.get('/v1/users', async (req, res) => {
    const users = await UserModel.find() || [];
    res.send(users);
});

app.get('/v1/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);

        if (user) {
            res.send(user);
        } else {
            res.status(404).end();
        }

    } catch (error) {
        res.status(404).end();
    }
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

app.get('/v1/products', async (req, res) => {
    const { categories } = req.query;
    const categoryList = categories ? categories.split(',') : [];
    const users = await ProductModel.find(
        categoryList.length > 0 ? 
        { categories: { $in: categoryList } } : undefined
    ) || [];
    res.send(users);
});

app.get('/v1/products/:id', async (req, res) => {
    try {
        const user = await ProductModel.findById(req.params.id);

        if (user) {
            res.send(user);
        } else {
            res.status(404).end();
        }

    } catch (error) {
        res.status(404).end();
    }
});

app.post('/v1/products', async (req, res) => {
    const product = await ProductModel.create(req.body);

    if (product) {
        res.status(200).end();
    } else {
        res.status(500).end();
    }
});

app.put('/v1/products/:id', (req, res) => {
    const id = req.params.id;
    const product = req.body;

    ProductModel.findByIdAndUpdate(id, product, (err) => {
        if (err) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    });
});

app.delete('/v1/products/:id', (req, res) => {
    const id = req.params.id;

    ProductModel.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    });
});

app.listen(port, () => {
    console.log('App listening on port 8080!');
});
