//connect mongo here
const mongoose = require('mongoose');

db = {
    db_url: "db url go here"
}

const ConnectToDb = async() => {
    await mongoose.connect(db.db_url, (err) =>{
        if(err){
            return console.log(err)
        } else{
            console.log("connected to db succesfully")
        }
    })
}

module.exports = { ConnectToDb };