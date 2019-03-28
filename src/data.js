/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
function order(a,b){
  if(a.name > b.name)
    return 1;
  if(a.name < b.name)
    return -1;
  return 0;
};
window.order = order;

/*const selectedPokemon = (pkms) => {
  const pokemonlist = pkms.pokemon;
  console.log(pokemonlist);
  const pagOne = document.getElementById("pokemones");
  
  for (let i = 0; i < pokemonlist.length; i++){
    const node = document.createElement("p");
    const image = document.createElement("img");
    image.setAttribute('src', pokemonlist[i].img);

    const textnode = document.createTextNode(pokemonlist[i].name );
    node.appendChild(textnode);
    
    pagOne.appendChild(node);
    pagOne.appendChild(image);

  } */
  /*const pokemonlist = POKEMON.pokemon;
  const arrNamesProperty = Object.values(pokemonlist);
  const filterOption = document.getElementById("option-pokemon");
  const nuevoArray = [];
  
  for (let i=0; i<pokemonlist.length; i++) {
    filterOption.innerHTML += `
      <select class="colorPokemon" >
          <option>${pokemonlist[i].type}</opcion>
      </select>`;
  };

  const filterData(data, condition) => {
    for (let i=0; i<pokemonlist.length; i++){
    if ()
   nuevoArray.push()
    }
    
  }*/

  /*function filterOfPoke(pokemonlist){
    for (let i=0; i<pokemonlist.length; i++){

    }
  }

  filterOption.addEventListener("change", function(e){
  console.log(pokemonlist.filter(pokemonlist => pokemonlist.tyoe == select.value ));
  return;
  }) 
  */


//window.selectedPokemon = selectedPokemon;
