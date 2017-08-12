// Set up MySQL connection.
var mysql = require("mysql");
require("./password.js");

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
//		password: require("./password.js"),
		database: 'burgers_db'
	});
};

// Make connection.
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;