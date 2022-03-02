// import model from model and define crud functions here
const Animes = require('../Model/animes');

Animes.find({genre: ['Comedy']}, (err, animeData) => {
    console.log(animeData);
});

const GetAllAnime = (req, res) => {
    console.log(req, res);
}

module.exports = {
    GetAllAnime
}