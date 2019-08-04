import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './middleware/logger';
import withAdminPermission from './middleware/withAdminPermission';
import withAuthenticated from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';
import getAuthRoutes from './routes/auth';
import getOrderRoutes from './routes/orders';
import './db/index';

require('dotenv').config();

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthenticated);
app.use(withAdminPermission);
app.use(logger);
getUserRoutes(app);
getProductRoutes(app);
getAuthRoutes(app);
getOrderRoutes(app);

app.get('/heartbeat', (req, res) => res.send({
  dateTime: new Date().toJSON()
}));

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

