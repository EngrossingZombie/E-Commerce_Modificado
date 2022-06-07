// Orden Matriz: Codigo, Nombre, Precio, Descripción, Stok

var matriz = [
	["Cupon1", "Plupones Manolino", 22900, "Plumón Coral Fleece estampado en modelo y tamaño a elección", 30],
	//["Cupon2","V for Vegan", 12990, "Entrada para compartir + playos de fondo + postres + bebestibles", 10],
	//["Cupon3","Clinica Dental",259900, "Evaluación integral + blanqueamiento dental led + limpieza + fluoración", 5],
	//["Cupon4", "Suricata Almacen", 5100, "Colación para 2 personas + postre", 20],
	//["Cupon5","El Abismo", 14000, "1, 2 o 4 tickets para Stukids", 5],
	//["Cupon6","Latam Travel", 599990, "San Pedro de Atacama : 2 noches 3 dias", 10]
];



function ingresarCupon() {
	var codigo = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var precio = document.getElementById("precio").value;
	var descripcion = document.getElementById("descripcion").value;
	var stok = document.getElementById("stok").values;
	matriz.push([codigo, nombre, precio, descripcion, stok]);
	alert("Cupon Insertado");
	document.getElementById("codigo").value = "";
	document.getElementById("nombre").value = "";
	document.getElementById("precio").value = "";
	document.getElementById("descripcion").value = "";
	document.getElementById("stok").value = "";

}

function mostrarCupon() {
	var largo = matriz.length;

	for (var x = 0; x < largo; x++) {
		for (var y = 0; y < matriz[x].length; y++) {
			alert(matriz[x][y]);
			document.getElementById("codigo").value = "";
		}
	}
}

function actualizarCupon() {
	//actualización de precio por medio del codigo
	var codigo = document.getElementById("codigo").value;
	var precio = document.getElementById("precio").value;
	var largo = matriz.length;
	for (var x = 0; x < largo; x++) {
		for (var y = 0; y < matriz[x].length; y++) {

			if (matriz[x][y] == codigo) {
				matriz[x][y + 1] = [precio];
				alert("Cupon Actualizado");
			}

		}
	}
	document.getElementById("codigo").value = "";
	document.getElementById("precio").value = "";
}

function actualizarStokCupon() {
	//actualización de Stok por medio del codigo
	var codigo = document.getElementById("codigo").value;
	var stok = document.getElementById("stok").value;

	var largo = matriz.length;
	for (var x = 0; x < largo; x++) {
		for (var y = 0; y < matriz[x].length; y++) {

			if (matriz[x][y] == codigo) {
				matriz[x][y + 1] = [stok];
				alert("Stok Cupon Actualizado");
			}

		}
	}
	document.getElementById("codigo").value = "";
	document.getElementById("stok").value = "";
}

function eliminarCupon() {
	//eliminar por codigo
	var codigo = document.getElementById("codigo").value;

	var largo = matriz.length;
	for (var x = 0; x < largo; x++) {
		for (var y = 0; y < matriz[x].length; y++) {

			if (matriz[x][y] == codigo) {
				matriz.splice([x][y], 1);
				alert("Cupon Eliminado");
				document.getElementById("codigo").value = "";
			}

		}
	}

}
