const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.listen(4000, () => console.log("server started on localhost 4000"));