document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente
  
  let cantidad = document.getElementById("cantidad").value;
  let contenedorMonto =  document.getElementById("contenedorMonto");
  let nuevoSpan = document.createElement("span");
  const borrar = document.getElementById("borrar");
  

  let seleccionCategoria = document.getElementById("seleccionCategoria");
  let opcion = seleccionCategoria.value;
  
  const VALOR_TICKET_NEUTRO = 200;
  const PORCENTAJE_TOTAL = 100;
  const DESCUENTO_ESTUDIANTE = 80;
  const DESCUENTO_TRAINEE = 50;
  const DESCUENTO_JUNIOR = 15;
  
  let valorTotalTicketsSinDescuento = cantidad * VALOR_TICKET_NEUTRO;
    
  let resultado;
  let descuentoEstudiante =  (DESCUENTO_ESTUDIANTE*valorTotalTicketsSinDescuento)/PORCENTAJE_TOTAL;
  let descuentoTrainee =  (DESCUENTO_TRAINEE*valorTotalTicketsSinDescuento)/PORCENTAJE_TOTAL;
  let descuentoJunior = (DESCUENTO_JUNIOR*valorTotalTicketsSinDescuento)/PORCENTAJE_TOTAL;
  
  switch(opcion) {
	  case "estudiante" :
		resultado = valorTotalTicketsSinDescuento - descuentoEstudiante;
		break;
	  case "junior" :
		resultado = valorTotalTicketsSinDescuento - descuentoJunior;
		break;
	  case "trainee" :
		resultado = valorTotalTicketsSinDescuento - descuentoTrainee;
		break;
	  default:
		console.log("opcion invalida");
  }
  
  
	nuevoSpan.textContent = resultado;
	
	contenedorMonto.appendChild(nuevoSpan);
	
	borrar.addEventListener("click", ()=> {
		contenedorMonto.removeChild(nuevoSpan);
		
	})
	
});









