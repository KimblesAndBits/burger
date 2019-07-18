orm = require("../config/orm");
burger = {
    updateBurger: function (burgerName) {
        return orm.updateOne(burgerName);
    },

    insertBurger: function (burgerName) {
        return orm.insertOne(burgerName);
    },

    findBurgers: function (cb) {
        orm.selectAll(data => {
            cb(data);
        });
    }
}

module.exports = burger;