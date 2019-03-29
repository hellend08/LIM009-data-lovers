/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global windo

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

const filter = function (data, typeP) {
  const newArrayType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === typeP) {
        newArrayType.push(data[i])
      }
    }
  }
  return newArrayType;
};
window.filter = filter;

const filterEgg = function (data, egg) {
  const newArrayEgg = [];
  for (let i=0; i<data.length; i++) {
    if (data[i].egg === egg) {
    newArrayEgg.push(data[i].egg)
    console.log(data[i].egg);
    } 
  }
  console.log(ata[j].egg);
  return newArrayEgg;
};
window.filterEgg = filterEgg;



/*const filtrado = function(valueSelect) {
  const newArray = arrValues.filter(function(allType){
    const typeFilter = allType.type[0] === valueSelect;
    return typeFilter;
  });
  
  console.log(newArray);
  return newArray;
}

window.filtrado = filtrado; */



