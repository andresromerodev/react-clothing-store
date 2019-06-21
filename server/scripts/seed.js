import mongoose from 'mongoose'
import { users, products } from './data';
import { UserModel } from '../models/User';
import { ProductModel } from '../models/Product';
require('dotenv').config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds239967.mlab.com:${DB_PORT}/clothing-store`, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {

    console.log('Database connection is open!');

    UserModel.insertMany(users, (error) => {
        if (error) {
            console.error(error);
        }
    });

    ProductModel.insertMany(products, (error) => {
        if (error) {
            console.error(error);
        }
    });
});
