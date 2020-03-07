exports.seed = async function(knex) {
    await knex('field').insert([
        {
            name: 'Ross Park',
            condition: 'Great'
        },
        {
            name: 'Softball World',
            condition: 'Fields are rough'
        },
        {
            name: 'Marquette',
            condition: 'Just an open space to hit'
        }
    ])
};
