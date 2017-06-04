(function () {
var contador = 0;

	var cargarPagina = function () {
		// Envío de To - Do
		$("#to-do-form").submit(agregarToDo);
		$("#message").keyup(validarContenido);

	};

	var agregarToDo = function (e) {
		e.preventDefault();

		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();

		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "testimonial-section" });
		//var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<label />");

		var identificador = "marcador-" + contador;

		//$postCheck.id = identificador;

		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);


		// Agregarlos al DOM
		//$postContenedor.append($postCheck);
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
	var validarContenido = function () {
		var $addButton = $("#add-button");
		// .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};


	// Cuando carga la página
	$(document).ready(cargarPagina);
	})();
	$(function(){
		var $addButton = $("#add-button");
		var longitud_max=140;
		var carcateres_actuales=$("#message").val.length;
		$(contador).html(longitud_max + " caracteres restantes");
		$("#message").keyup(function(){
			var caracteres_nuevos=longitud_max - $("#message").val().length;
			$("#contador").html(caracteres_nuevos + "caracteres restantes");
		if (caracteres_nuevos <=20 && caracteres_nuevos >10){
			$("#contador").css("color","#DBA901");
		}else if(caracteres_nuevos <=10){
			$("#contador").css("color","#FF0000");

		}else {
				$("#contador").css("color","#000000");
		}
		if(caracteres_nuevos <= 0){
			$addButton.attr("disabled", true);

		}


		})
	});
