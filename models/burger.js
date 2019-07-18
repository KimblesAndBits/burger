orm = require("../config/orm");
module.exports = function () {
    function updateBurger(burgerName) {
        orm.updateOne(burgerName);
    };

    function insertBurger(burgerName) {
        orm.insertOne(burgerName);
    };

    function findBurgers() {
        orm.selectAll();
    };
}