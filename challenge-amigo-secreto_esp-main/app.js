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
	const input = document.getElementById('amigo');
	const nombre = input.value;

	if (nombre !== '') {
		amigos.push(nombre);
		actualizarLista();
		input.value = '';
	} else {
		alert('Por favor, escribe un nombre.');
	}
}

function sortearAmigo() {
	const resultado = document.getElementById('resultado');
	const lista = document.getElementById('listaAmigos');

	lista.innerHTML = '';
	resultado.innerHTML = '';

	if (amigos.length === 0) {
		resultado.innerHTML = '<li>Agrega un nombre</li>';
		return;
	}
	const indice = Math.floor(Math.random() * amigos.length);
	const elegido = amigos[indice];
	const li = document.createElement('li');
	li.textContent = `Tu amigo secreto es ${elegido}`;
	resultado.appendChild(li);
}
