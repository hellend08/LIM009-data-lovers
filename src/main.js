const allDataPokemon = POKEMON.pokemon;
const buttonAZ = document.getElementById("a-z");
const buttonZA = document.getElementById("z-a");
const firstPage = document.getElementById("pokemones");
const selectFilterType = document.getElementById("option-pokemon");
const selectFilterEgg = document.getElementById("option-pokemon-egg");
const selectFilterWeak = document.getElementById("option-pokemon-weak");

//PINTAR TODOS LOS POKEMONES
const showPokemonList = (allDataPokemon) => {
  for (let i=0; i<allDataPokemon.length; i++){
    firstPage.innerHTML += `
     <div class="colorPokemon" >
     <figure>
     <p>${allDataPokemon[i].name}</p>
     </figure>
     <img src= "${allDataPokemon[i].img}">
     </div>
    ` ;
  }
}
showPokemonList(allDataPokemon); 

//ORDENAR DE A-Z
buttonAZ.addEventListener("click", () => {
  firstPage.innerHTML = '';
  showPokemonList(allDataPokemon.sort(order)); 
});

//ORDENAR DE Z-A
buttonZA.addEventListener("click", () => {
  firstPage.innerHTML = '';
  showPokemonList(allDataPokemon.sort(order).reverse());
});
 
// FILTRAR POR TIPO DE POKEMON
selectFilterType.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filter(allDataPokemon,selectFilterType.value));
});

//FILTRAR POKEMONES POR DEBILIDAD
selectFilterWeak.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(weak(allDataPokemon,selectFilterWeak.value));
});

//FILTRAR POR HUEVOS
selectFilterEgg.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filterEgg(allDataPokemon,selectFilterEgg.value));
});
