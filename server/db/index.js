import mongoose from 'mongoose';
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
});

export default db;
