async function getPokemon(query) {
const data = await fetch('https://pokeapi.co/api/v2/pokemon/'+query);
const pokemon = await data.json();
console.log(pokemon);
return pokemon;
}


async function getSpecies(pokemon) {
    const data = await fetch(pokemon.species.url);
    const speciesData = await data.json();
    console.log(speciesData);
    return speciesData;
}



async function getEvolution(speciesData) {
    const data = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await data.json();
    console.log(evolutionData);
    return evolutionData;
}


let pokeID = 'squirtle';

async function getAllPokemon() {
    const pokemon = await getPokemon(pokeID);
    const species = await getSpecies(pokemon);
    const evo = await getEvolution(species);
    console.log(pokemon.sprites.front_default, species, evo);
}

getAllPokemon();


async function displayPokemon() {
    const pokeImage = await getPokemon(pokeID);
    let image = document.createElement('img');
    document.body.appendChild(image);
    image.src = pokeImage.sprites.front_default;
    console.log(image);

}

displayPokemon();



