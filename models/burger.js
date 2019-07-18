orm = require("../config/orm");
burger = {
    updateBurger: function (id) {
        orm.updateOne(id);
    },

    insertBurger: function (burgerName) {
        orm.insertOne(burgerName);
    },

    findBurgers: function (cb) {
        orm.selectAll(data => {
            cb(data);
        });
    }
}

module.exports = burger;