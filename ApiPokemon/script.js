document.addEventListener('DOMContentLoaded', () => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon/";
    const nombreElement = document.getElementById("nombre");
    const alturaElement = document.getElementById("altura");
    const pesoElement = document.getElementById("peso");
    const buscarPokemonButton = document.getElementById("buscarPokemon");
    const pokemonInput = document.getElementById("pokemonInput");

    function fetchPokemonData() {
        const pokemonNombreONumero = pokemonInput.value.trim().toLowerCase();
        const url = urlBase + pokemonNombreONumero;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                updatePokemonInfo(data);
            })
            .catch(error => {
                handleFetchError(error);
            });
    }

    function updatePokemonInfo(data) {
        nombreElement.textContent = data.name;
        alturaElement.textContent = data.height;
        pesoElement.textContent = data.weight;
    }

    function handleFetchError(error) {
        console.error("No se pudo obtener datos de la API.", error);
    }

    buscarPokemonButton.addEventListener('click', fetchPokemonData);
});
