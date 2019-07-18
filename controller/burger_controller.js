express = require("express");
burger = require("../models/burger");

var router = express.Router();

router.get('/', (req, res) => {
    burger.findBurgers(data => {
    var hbsObject = {
        burgers: data
    };
    res.render("index", hbsObject);
});
});

router.post('/api/update', (req, res) => {
    var burgerName = req.body;
    burger.updateBurger(burgerName);
});

router.put('/api/insert', (req, res) => {
    var burgerName = req.body;
    burger.insertBurger(burgerName);
});

module.exports = router;