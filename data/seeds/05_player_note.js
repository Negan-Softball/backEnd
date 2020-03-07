exports.seed = async function(knex) {
    await knex('player_note').insert([
        {
            player_id: 1,
            note: 'Swing is a bit rusty'
        },
        {
            player_id: 1,
            note: 'Fat and slow'
        },
        {
            player_id: 1,
            note: 'Great glove at first'
        },
        {
            player_id: 2,
            note: 'Can play anywhere in the outfield'
        },
        {
            player_id: 2,
            note: 'Colorblind'
        },
        {
            player_id: 2,
            note: 'A solid choice for middle infield'
        },
        {
            player_id: 3,
            note: 'Can play anywhere on the field'
        },
        {
            player_id: 3,
            note: 'Calls out team for effort'
        },
        {
            player_id: 3,
            note: 'Top 3 hitter'
        },
    ])
};
