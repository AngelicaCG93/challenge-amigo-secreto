// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let names = [];

function agregarAmigo() {
	const input = document.getElementById('amigo'); // busca el input
	const nombre = input.value; // toma el texto y quita espacios

	if (nombre !== '') {
		names.push(nombre); // guarda el nombre en el array

		// muestra el nombre en pantalla
		const lista = document.getElementById('listaAmigos');
		const li = document.createElement('li');
		li.textContent = nombre;
		lista.appendChild(li);

		input.value = ''; // limpia el campo
	} else {
		alert('Por favor, escribe un nombre.');
	}
}
