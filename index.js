const express = require('express');
const app = express();

app.use(express.json());

app.listen(4000, () => console.log("server started on localhost 4000"));