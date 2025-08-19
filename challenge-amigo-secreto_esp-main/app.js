// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function actualizarLista() {
	const lista = document.getElementById('listaAmigos');

	lista.innerHTML = '';

	for (let i = 0; i < amigos.length; i++) {
		const li = document.createElement('li');
		li.textContent = amigos[i];
		lista.appendChild(li);
	}
}

function agregarAmigo() {
	const input = document.getElementById('amigo'); // busca el input
	const nombre = input.value; // toma el texto y quita espacios

	if (nombre !== '') {
		amigos.push(nombre); // guarda el nombre en el array
		actualizarLista();
		input.value = ''; // limpia el campo
	} else {
		alert('Por favor, escribe un nombre.');
	}
}
