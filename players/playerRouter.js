const express = require('express');
const helpers = require('./playerModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
   try {
       const players = await helpers.getPlayers();
       res.status(200).json(players)
   } catch (e) {
       next(e)
   }
});

router.get('/:id', async (req, res, next) => {
   try {
       const { id } = req.params;
       const player = await helpers.getPlayerById(id);
       res.status(200).json(player);
   } catch (e) {
       next(e)
   }
});

module.exports = router;
