// schema and schema model defined hereconst express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const animesSchema = new Schema({

})

const Animes = mongoose.model('Animes', animesSchema);

module.exports = Animes;