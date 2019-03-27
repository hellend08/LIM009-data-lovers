const buttonAZ = document.getElementById("a-z");
const buttonZA = document.getElementById("z-a");
const Fuego = document.getElementById("Fire");
const firstPage = document.getElementById("pokemones");
const allDataPokemon = POKEMON.pokemon;
const namePokemon = [];
const arrAllDataPokemon = Object.values(allDataPokemon);

//PINTAR TODOS LOS POKEMONES
const showPokemonList = (arrAllDataPokemon) => {
  for (let i=0; i<allDataPokemon.length; i++) {
    firstPage.innerHTML += `
     <div class="colorPokemon" >
     <figure>
     <p>Nombre: ${arrAllDataPokemon[i].name}</p>
     </figure>
     <img src= "${arrAllDataPokemon[i].img}">
     </div>
    ` ;
  }
}
showPokemonList(arrAllDataPokemon); 

//ORDENAR DE A-Z
buttonAZ.addEventListener("click",function(){
  firstPage.innerHTML = '';
showPokemonList(arrAllDataPokemon.sort(order)); 
});


//ORDENAR DE Z-A
buttonZA.addEventListener("click",function(){
  firstPage.innerHTML = '';
  showPokemonList(arrAllDataPokemon.sort(order).reverse());
});
 

