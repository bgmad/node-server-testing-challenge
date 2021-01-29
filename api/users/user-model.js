const db = require('../../data/db-config');
module.exports = {
    async insert(user) {
        const [id] = await db('users').insert(user);
        return db('users').where({userId: id}).first();
    },
    getAll() {
        return db('users');
    }
}