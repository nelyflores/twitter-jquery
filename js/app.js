var contador = 0;

	var cargarPagina = function () {
		// Envío de To - Do
		$("#to-do-form").submit(agregarToDo);
		
	};

	var agregarToDo = function (e) {
		e.preventDefault();
	
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();

		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "testimonial-section" });
		var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<label />");

		var identificador = "marcador-" + contador;

		$postCheck.id = identificador;
		
		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);

		// Agregarlos al DOM
		$postContenedor.append($postCheck);
		$postContenedor.append($postTexto);

		// Agregarlo a un elemento existente para visualizarlo
		// contenedor.appendChild(postContenedor);
		$contenedor.prepend($postContenedor);

		// Borrar contenido de textarea
		$mensajeContenedor.val("");
		$botonAgregar.attr("disabled", true);

		// bind, apply, call

		contador++;
	};
	// Cuando carga la página
	$(document).ready(cargarPagina);