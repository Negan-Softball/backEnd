const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Negan softball api"
    })
});

module.exports = router;
