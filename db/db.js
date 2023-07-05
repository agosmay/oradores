const mysql      = require('mysql');

const connection = mysql.createConnection({
	 host     : 'localhost',
	 user     : 'root',
	 password : '',
	 database : 'dboradores'

});

//base de datos dbOradores
//tabla oradores


connection.connect((err)=> {
	if(err) throw err;
	console.log('Base de datos conectada')
});


module.exports = connection 