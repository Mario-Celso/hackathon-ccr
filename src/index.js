const express = require('express');
const cors = require('cors');
const routes = require('./routes');
let PORT = process.env.PORT || 3333

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT);