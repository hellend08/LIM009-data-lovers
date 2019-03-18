/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const selectedPokemon = (pokemon) => {
  const pokemonlist = pokemon.pokemon;
  //console.log(pokemonlist)
  const select = document.getElementById("option-pokemon")
  //select.innerHTML = `<option  value="`+ pokemonlist[1].name + `">`+ pokemonlist[1].name + `</option>`
  select.addEventListener("change", function(e){
    console.log(pokemonlist.filter(pokemonlist => pokemonlist.name == select.value ))
  })
 
  return ;
};









window.selectedPokemon = selectedPokemon;
