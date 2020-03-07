const db = require('../data/config');

module.exports = {
    getPlayers,
    getPlayerById
};

function getPlayers() {
    return db('player')
}

function getPlayerById(id) {
    return db('player')
        .where('id', id)
        .select('player.name', 'player.number')
        .first()
}
