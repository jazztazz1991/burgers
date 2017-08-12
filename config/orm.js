var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb){
        var query = "SELECT * from " + tableInput + ";";
        connection.query(query, function(err, result){
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb){
        var query = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ")";
        
        console.log(query);
        
        connection.query(query, vals, function(err, result){
            if(err) throw err;
            
            cb(result);
        })
    },
    updateOne: function(table , colVals, condition, cb){
        var query = " UPDATE " + table + " SET " + objToSql(colVals) + " WHERE " + condition;
        
        console.log(query);
        connection.query(query, function(err, result){
            if(err) throw err;
            
            cb(result);
        })
        
    }
}

module.exports = orm;