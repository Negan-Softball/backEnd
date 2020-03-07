exports.seed = async function(knex) {
    await knex('field_note').insert([
        {
            field_id: 1,
            note: 'Huge lip on infield'
        },
        {
            field_id: 1,
            note: 'Outfield is great'
        },
        {
            field_id: 1,
            note: 'Dusty on dry days'
        },
        {
            field_id: 2,
            note: 'Loud music'
        },
        {
            field_id: 2,
            note: 'Hole in the outfield'
        },
        {
            field_id: 2,
            note: 'Right hand batter box is a crater'
        },
        {
            field_id: 3,
            note: 'Overgrown and unmaintained'
        },
        {
            field_id: 3,
            note: 'No bathrooms'
        },
        {
            field_id: 3,
            note: 'HORNETS'
        },
    ])
};
