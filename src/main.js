const allDataPokemon = POKEMON.pokemon;
const buttonAZ = document.getElementById("a-z");
const buttonZA = document.getElementById("z-a");
const firstPage = document.getElementById("pokemones");
const selectFilterType = document.getElementById("option-pokemon");
const selectFilterWeak = document.getElementById("option-pokemon-weak");
const selectFilterEgg = document.getElementById("option-pokemon-egg");
const buttonSumWeight = document.getElementById("all-weight");
const buttonSumHeight = document.getElementById("all-height");
const resultStats = document.getElementById("stats");
//PINTAR TODOS LOS POKEMONES
const showPokemonList = (allDataPokemon) => {
  for (let i = 0; i < allDataPokemon.length; i++) {
    firstPage.innerHTML += `
     <div class="colorPokemon" >
     <p>${allDataPokemon[i].name}</p>
     <figure>
     <img src= "${allDataPokemon[i].img}">
     </figure>
     <p>${allDataPokemon[i].egg}</p>
     </div>
    ` ;
  }
}
showPokemonList(allDataPokemon);
//ORDENAR DE A-Z
buttonAZ.addEventListener("click", () => {
  firstPage.innerHTML = '';
  showPokemonList(sortData(allDataPokemon, 'Az'));
});
//ORDENAR DE Z-A
buttonZA.addEventListener("click", () => {
  firstPage.innerHTML = '';
  showPokemonList(sortData(allDataPokemon, 'Za'));
});
// FILTRAR POR TIPO DE POKEMON
selectFilterType.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filterData(allDataPokemon, selectFilterType.value));
});
//FILTRAR POKEMONES POR DEBILIDAD
selectFilterWeak.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filterWeak(allDataPokemon, selectFilterWeak.value));
});
//FILTRAR POKEMONES POR HUEVOS
selectFilterEgg.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filterEgg(allDataPokemon, selectFilterEgg.value));
});
//HACER CÁLCULO DEL PROMEDIO DE LA SUMA DE ALTURA Y PESO DE TODOS LOS POKEMONES
buttonSumWeight.addEventListener("click", () => {
  resultStats.innerHTML = ("El promedio de su peso es " + computeStats.weight(allDataPokemon) + "kg.");
});

buttonSumHeight.addEventListener("click", () => {
  resultStats.innerHTML = ("El promedio de su talla es " + computeStats.height(allDataPokemon) + "m.");
});