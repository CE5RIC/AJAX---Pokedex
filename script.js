



document.getElementById("search").addEventListener("click", fetchPokemon);

// function to fetch pokemon from API 

function fetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    }) 
}
  





