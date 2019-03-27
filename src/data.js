/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//FUNCIÓN ORDENAR A-Z /Z-A
function order(a,b){
  if(a.name > b.name)
    return 1;
  if(a.name < b.name)
    return -1;
  return 0;
}; 
window.order= order;

//FUNCIÓN FILTRAR POKEMONES
const dataP = POKEMON.pokemon
const arrValues = Object.values(dataP)
const newA2 = arrValues.filter(function(typeF){
  return (typeF.type[0] ==="Fire");
});
console.log(newA2);

