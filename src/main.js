const buttonAZ = document.getElementById("a-z");
const buttonZA = document.getElementById("z-a");
const firstPage = document.getElementById("pokemones");
const allDataPokemon = POKEMON.pokemon;
// const arrAllDataPokemon = Object.values(allDataPokemon);
const selectFilter = document.getElementById("option-pokemon");
const selectFilter2 = document.getElementById("option-pokemon2");
const selectFilter3 = document.getElementById("option-pokemon3");
// const namePokemon = [];

//PINTAR TODOS LOS POKEMONES
const showPokemonList = (allDataPokemon) => {
  for (let i=0; i<allDataPokemon.length; i++) {
    firstPage.innerHTML += `
     <div class="colorPokemon" >
     <p>Nombre: ${allDataPokemon[i].name}</p>
     <p>${allDataPokemon[i].egg}</p>
     <figure>
     <img src= "${allDataPokemon[i].img}">
     </figure>
     </div>
    ` ;
  }
}
showPokemonList(allDataPokemon); 

//ORDENAR DE A-Z
buttonAZ.addEventListener("click",() => {
  firstPage.innerHTML = '';
showPokemonList(allDataPokemon.sort(order)); 
});


//ORDENAR DE Z-A
buttonZA.addEventListener("click",() => {
  firstPage.innerHTML = '';
  showPokemonList(allDataPokemon.sort(order).reverse());
});
 
// FILTRAR POR TIPO DE POKEMON
selectFilter.addEventListener("change",() => {
  firstPage.innerHTML = '';
  showPokemonList(filter(allDataPokemon,selectFilter.value));
});

//FILTRAR POKEMONES POR DEBILIDAD
selectFilter2.addEventListener("change",() => {
  firstPage.innerHTML = '';
  showPokemonList(weak(allDataPokemon,selectFilter2.value));
});

//FILTRAR POKEMONES POR HUEVOS
selectFilter3.addEventListener("change",() => {
  firstPage.innerHTML = '';
  showPokemonList(filterEgg(allDataPokemon,selectFilter3.value));
});
