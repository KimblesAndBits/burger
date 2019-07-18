var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burger;";
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  insertOne: function(burgerName) {
    var queryString = "INSERT INTO burger SET";
    connection.query(queryString, {
        name: burgerName
    }, (err, data) => {
        if (err) throw err;
        return(data);
    });
  },

  updateOne: function(burgerName) {
    var queryString = "UPDATE burger set ?? WHERE ?;";
    connection.query(queryString,
        {
            devoured: true
        },
        {
            name: burgerName
        }, (err, data) => {
            if (err) throw err;
            return(data);
        });
  }

};

module.exports = orm;