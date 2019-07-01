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
  allDataPokemon.forEach((data) => {
    firstPage.innerHTML += `
     <div class="colorPokemon" >
       <p>${data.name}</p>
       <figure class="">
         <img src= "${data.img}">
       </figure>
     </div>
     `;
    return allDataPokemon;
  });
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
  showPokemonList(filterData(allDataPokemon, selectFilterType.value, 'type'));
});
//FILTRAR POKEMONES POR DEBILIDAD
selectFilterWeak.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filterData(allDataPokemon, selectFilterWeak.value, 'weaknesses'));
});
//FILTRAR POKEMONES POR HUEVOS
selectFilterEgg.addEventListener("change", () => {
  firstPage.innerHTML = '';
  showPokemonList(filterEgg(allDataPokemon, selectFilterEgg.value));
});
//HACER CÁLCULO DEL PROMEDIO DE LA SUMA DE ALTURA Y PESO DE TODOS LOS POKEMONES
buttonSumWeight.addEventListener("click", () => {
  resultStats.innerHTML = ("El promedio de su peso es " + computeStats.statsPromedy(allDataPokemon, 'weight') + "kg.");
});

buttonSumHeight.addEventListener("click", () => {
  resultStats.innerHTML = ("El promedio de su talla es " + computeStats.statsPromedy(allDataPokemon, 'height') + "m.");
});