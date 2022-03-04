const Animes = require('../Model/animes');

const GetAllAnimeByGenre = (req, res) => {
    console.log(req.query);
    Animes.find({genre: JSON.parse(req.query.genre)}, (err, animeData) => { //figure out how to find by specified genre, filter?
        console.log(animeData);
        res.json(animeData);
    });
}

/* ⚙️⚙️⚙️ sussy function, might not use cus can be done on client side ⚙️⚙️⚙️ */
const GetAllAnime = (req, res) => {
    console.log(req, res);
}

module.exports = {
    GetAllAnime,
    GetAllAnimeByGenre
}