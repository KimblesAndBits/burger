express = require("express");
require("../models/burger");

var router = express.Router();

router.get('/api/find', (req, res) => {
    var burgerList = findBurgers();
    return res.json(burgerList);
});

router.post('/api/update', (req, res) => {
    var burgerName = req.body;
    updateBurger(burgerName);
});

router.put('/api/insert', (req, res) => {
    var burgerName = req.body;
    insertBurger(burgerName);
});

module.exports = router;