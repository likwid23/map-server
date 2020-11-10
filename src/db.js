const monk = require('monk');
const db = monk('mongodb+srv://likwid2:Vapor2018@cluster0.tbthp.mongodb.net/guestmap?retryWrites=true&w=majority');

module.exports = db;