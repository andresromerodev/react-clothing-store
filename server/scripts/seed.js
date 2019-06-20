import mongoose from 'mongoose'
require('dotenv').config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

var Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: String,
    username: String,
    role: String,
});

const UserModel = mongoose.model('User', UserSchema);

mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@ds239967.mlab.com:${DB_PORT}/clothing-store`, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});

db.on('open', () => {
    console.log('Database connection is open!');
    const user = new UserModel({
        email: 'janedoe@gmail.com',
        username: 'janedoe',
        role: 'customer',
    });

    user.save((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('User saved!');
        }
    });
});
