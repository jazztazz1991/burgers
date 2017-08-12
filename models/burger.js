var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(colVals, condition, cb){
        orm.updateOne("burgers", colVals, condition, function(res){
            cb(res);
        });
    }
}


module.exports = burger;