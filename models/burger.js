orm = require("../config/orm");
module.exports = function () {
    function updateBurger(burgerName) {
        return orm.updateOne(burgerName);
    };

    function insertBurger(burgerName) {
        return orm.insertOne(burgerName);
    };

    function findBurgers() {
        return orm.selectAll();
    };
}