const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ConnectToDb } = require('./mongoConfig');

const AnimeRouter = require('./Routes/animes');

//-----------Import End-----------//
//configs
app.use(express.json());
ConnectToDb();

//routes
app.use(AnimeRouter);

app.listen(4000, () => console.log("server started on localhost 4000"));