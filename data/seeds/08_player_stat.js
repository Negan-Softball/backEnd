exports.seed = async function(knex) {
    await knex('player_stat').insert([
        {
            player_id: 1,
            average: .421,
            hits: 20,
            doubles: 4,
            triples: null,
            homeRuns: null,
            runs: 15,
            strikeOuts: 10
        },
        {
            player_id: 2,
            average: .528,
            hits: 35,
            doubles: 4,
            triples: 2,
            homeRuns: 3,
            runs: 15,
            strikeOuts: 10
        },
        {
            player_id: 3,
            average: .422,
            hits: 20,
            doubles: 4,
            triples: null,
            homeRuns: null,
            runs: 15,
            strikeOuts: 10
        }
    ])
};
