exports.seed = async function(knex) {
    await knex('position').insert([
        {position: 'Catcher'},
        {position: 'First-Base'},
        {position: 'Second-Base'},
        {position: 'Third-Base'},
        {position: 'Short-Stop'},
        {position: 'Left'},
        {position: 'Left-Center'},
        {position: 'Right-Center'},
        {position: 'Right'},
        {position: 'Pitcher'},
        {position: 'DHH'},
    ])
};
