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

router.put('/api/update/:id', (req, res) => {
    var id = req.params.id;
    burger.updateBurger(id);
    res.json(false);
});

router.post('/api/insert', (req, res) => {
    var burgerName = req.body;
    burger.insertBurger(burgerName);
    res.json(false);
});

module.exports = router;