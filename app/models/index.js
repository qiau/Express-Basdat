const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url:dbConfig.url,
    ikan: require("./ikan.model.js")(mongoose)
}