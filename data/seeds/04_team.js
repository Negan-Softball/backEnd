exports.seed = async function(knex) {
    await knex('team').insert([
        {
            name: 'Negan',
            win: 12,
            loss: 5
        },
        {
            name: 'Homestead',
            win: 10,
            loss: 7
        },
        {
            name: 'Lakesiders',
            win: 16,
            loss: 1
        }
    ])
};
