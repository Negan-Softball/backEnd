exports.seed = async function(knex) {
    await knex('player_position').insert([
        {
            player_id: 1,
            position_id: 2
        },
        {
            player_id: 1,
            position_id: 10
        },
        {
            player_id: 1,
            position_id: 4
        },
        {
            player_id: 2,
            position_id: 6
        },
        {
            player_id: 2,
            position_id: 7
        },
        {
            player_id: 2,
            position_id: 2
        },
        {
            player_id: 3,
            position_id: 5
        },
        {
            player_id: 3,
            position_id: 4
        },
        {
            player_id: 3,
            position_id: 6
        },
    ])
};

