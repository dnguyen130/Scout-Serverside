const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ConnectToDb } = require('./mongoConfig');

const animeRouter = require('./Routes/anime');

app.use(express.json());

ConnectToDb();

app.use(animeRouter);

app.listen(4000, () => console.log("server started on localhost 4000"));