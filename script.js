



document.getElementById("search").addEventListener("click", fetchPokemon);

// function to fetch pokemon from API 

function fetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        
    }) 
}


// Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?limit=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60. (Found this bit of info straight on the Pokeapi website itself) By changing the limit to 151 in my function above I was able to get all 151 Pokemons.








  





