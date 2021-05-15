const express = require('express');
const app = express();
const process = require('process');
const port = process.env.PORT || 3000;
const db = require('./config/db-connection');
const movieRouter = require('./routes/movies')
const cors = require('cors');

app.use(cors())

app.use('/movies',movieRouter)


app.listen(port);