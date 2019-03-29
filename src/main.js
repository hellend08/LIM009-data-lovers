const buttonAZ = document.getElementById("a-z");
const buttonZA = document.getElementById("z-a");
const firstPage = document.getElementById("pokemones");
const allDataPokemon = POKEMON.pokemon;
// const arrAllDataPokemon = Object.values(allDataPokemon);
const selectFilter = document.getElementById("option-pokemon");
const selectFilter2 = document.getElementById("option-pokemon2");
// const namePokemon = [];

//PINTAR TODOS LOS POKEMONES
const showPokemonList = (allDataPokemon) => {
  for (let i=0; i<allDataPokemon.length; i++) {
    firstPage.innerHTML += `
     <div class="colorPokemon" >
     <figure>
     <p>Nombre: ${allDataPokemon[i].name}</p>
     </figure>
     <img src= "${allDataPokemon[i].img}">
     </div>
    ` ;
  }
}
showPokemonList(allDataPokemon); 

//ORDENAR DE A-Z
buttonAZ.addEventListener("click",function(){
  firstPage.innerHTML = '';
showPokemonList(allDataPokemon.sort(order)); 
});


//ORDENAR DE Z-A
buttonZA.addEventListener("click",function(){
  firstPage.innerHTML = '';
  showPokemonList(allDataPokemon.sort(order).reverse());
});
 
// FILTRAR POR TIPO DE POKEMON
selectFilter.addEventListener("change",function(){
  firstPage.innerHTML = '';
  showPokemonList(filter(allDataPokemon,selectFilter.value));
});

//FILTRAR POKEMONES POR DEBILIDAD
selectFilter2.addEventListener("change",function(){
  firstPage.innerHTML = '';
  showPokemonList(weak(allDataPokemon,selectFilter2.value));
});
