const express = require("express");
const cors = require('cors');
const rootRouter = require('./routes/rootRoute');

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static('.'))
app.listen('8080');

app.use('/api', rootRouter);

