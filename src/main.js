const buttonAZ = document.getElementById("a-z");
const buttonZA = document.getElementById("z-a");
const firstPage = document.getElementById("pokemones");
const allDataPokemon = POKEMON.pokemon;
const namePokemon = [];
const arrAllDataPokemon = Object.values(allDataPokemon);

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

buttonAZ.addEventListener("click", function() {
  firstPage.innerHTML = '';
  arrAllDataPokemon.sort(function(a,b){
    if(a.name > b.name)
      return 1;
    if(a.name < b.name)
      return -1;
    return 0;
  }); 
  for (let i=0; i<arrAllDataPokemon.length; i++) {
    firstPage.innerHTML += `
      <div class="colorPokemon" >
        <figure>
          <p>Nombre: ${arrAllDataPokemon[i].name}</p>
        </figure>
        <img src= "${arrAllDataPokemon[i].img}">
      </div>`;
  }
});

/*buttonZA.addEventListener("click",function(){
  firstPage.innerHTML = '';
  arrAllDataPokemon.sort(function(a,b){
    if(a.name > b.name)
      return -1;
    if(a.name < b.name)
      return 1;
    return 0;
  });  
  for (let i=0; i<arrAllDataPokemon.length; i++) {
    firstPage.innerHTML += `
      <div class="colorPokemon" >
        <figure>
          <p>Nombre: ${arrAllDataPokemon[i].name}</p>
        </figure>
        <img src= "${arrAllDataPokemon[i].img}">
      </div>`;
  }
});*/