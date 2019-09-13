const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pino = require('express-pino-logger')();
const settings = require('./settings');

const app = express();
app.use(pino);
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/public', express.static('public'));

app.get('/', (req, res) => res.json({msg: 'Hello World!'}));

app.listen(settings.port, () => console.log('Example app listening on port', settings.port));
