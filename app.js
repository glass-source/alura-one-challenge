// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array to store friends names
let amigos = [];

/**
 * Adds a friend to the list
 * - Gets the input value
 * - Validates it's not empty
 * - Adds it to the array
 * - Updates the display
 */
function agregarAmigo() {
    // Get the input element and its value
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validate the input is not empty
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }

    // Add the name to our array
    amigos.push(nombreAmigo);

    // Clear the input field
    inputAmigo.value = '';

    // Update the display
    actualizarListaAmigos();
}

/**
 * Updates the display of friends in the UI
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Clear current list
    listaAmigos.innerHTML = '';

    // Add each friend to the list
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

/**
 * Randomly selects a friend from the amigos array and displays the result
 */
function sortearAmigo() {
    // Check if we have enough friends for a meaningful draw
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para realizar el sorteo');
        return;
    }

    // Select a random friend
    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];

    // Get the result list element
    const listaResultado = document.getElementById('resultado');

    // Clear previous results
    listaResultado.innerHTML = '';

    // Create and append the result item
    const li = document.createElement('li');
    li.textContent = `¡${amigoSeleccionado} ha sido seleccionado!`;
    listaResultado.appendChild(li);
}
