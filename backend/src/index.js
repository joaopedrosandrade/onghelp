const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/* em caso de on colocar {origin: 'http://meuapp.com'}*/
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);