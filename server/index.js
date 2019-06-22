// eslint-disable-next-line no-unused-vars
import db from './db';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthentication from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';

require('dotenv').config();

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
app.use(withAuthentication);
app.use(logger);

// Routes:
getUserRoutes(app);
getProductRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
