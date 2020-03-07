exports.seed = async function(knex) {
    await knex('player').insert([
        {
         name: 'Joe',
         number: 20
        },
        {
         name: 'John',
         number: 21
        },
        {
         name: 'Clint',
         number: 5
        }
    ])
};
