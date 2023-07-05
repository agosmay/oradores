const connection =  require('../db/db')

//controladores GET

const inicioGET = (req,res)=> {
	
		res.render('index', {
		titulo: 'Bs As - Ciudad',
	});
	
	
}



const comprarGET = (req,res)=>{
	res.render('comprar', {
		titulo: 'Comprar Tickets'
	});
}




const oradoresGET = (req,res)=> {
	let sql = "SELECT * FROM oradoreslist"
	connection.query(sql, (err,data)=> {
		if(err) throw err;
		res.render('oradores' , {
		titulo : 'Seccion de oradores',
		data: data
	})
		
		
		
	})
	
	
}


const editarGET = (req,res)=> {
	let sql = "SELECT * FROM oradoreslist WHERE id=?"
	let id = req.params.id
	connection.query(sql, [id], (err,data)=> {
		if(err)throw err;;
		res.render('editar-orador' , {
		titulo : 'Editar Orador',
		data : data[0]
		
	})
		
	})
	
	
	
}

const borrarGET = (req,res)=> {
	let sql = "DELETE FROM oradoreslist WHERE id=?"
	let id = req.params.id
	connection.query(sql, id, (err,data)=> {
		if(err) throw err;
		res.redirect('/oradores')
		
	})
	
}



//controlladores POST


const agregarPOST = (req,res)=> {
	let cuerpo = req.body
	let sql = "INSERT INTO oradoreslist SET ?"
	connection.query(sql, [cuerpo], (err,data)=> {
		if(err) throw err;
		res.redirect('/oradores')
	})
	
	
	
}

	
const editarPOST = (req,res)=> {
	let sql = "UPDATE oradoreslist SET ? WHERE id=?"
	let cuerpo = req.body
	let id = req.params.id
	connection.query(sql, [cuerpo,id], (err,data)=> {
		if(err) throw err;
		res.redirect('/oradores')
		
	})
	
	
}	
	

module.exports = {inicioGET, agregarPOST, oradoresGET, comprarGET, editarPOST, borrarGET, editarGET}





	
	
