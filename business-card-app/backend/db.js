const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/businessCard');

const businessCardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: Array,
    links: Array
})

const Card = mongoose.model('Card',businessCardSchema)

module.exports = {Card}