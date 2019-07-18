module.exports = function () {
    express = require("express");
    require("../models/burger");

    var router = express();
    var PORT = process.env.PORT || 8080

    router.get('/api/find', (req, res) => {
        var burgerList = findBurgers();
        return res.json(burgerList);
    });

    router.post('/api/update', (req, res) => {
        var burgerName = req.body;
        updateBurger(burgerName);
    });

    router.post('/api/insert', (req, res) => {
        var burgerName = req.body;
        insertBurger(burgerName);
    });

    app.listen(PORT, function () {
        console.log("App listening on http://localhost" + PORT);
    });
}