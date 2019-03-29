/* Manejo de data */
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//FUNCIÓN ORDENAR A-Z /Z-A
function order(a, b) {
  if (a.name > b.name)
    return 1;
  if (a.name < b.name)
    return -1;
  return 0;
};
window.order = order;

//FUNCIÓN FILTRAR POKEMONES

const filter = function (data, typeP) {
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === typeP) {
        newArray.push(data[i])
      }
    }
  }
  return newArray;
};

window.filter = filter;

//FUNCIÓN FILTRAR POKEMONES POR DEBILIDAD  
const weak = function (dataP, weaknessesP) {
  const newArray2 = [];
  for (let i = 0; i < dataP.length; i++) {
    for (let x = 0; x < dataP[i].weaknesses.length; x++) {
      if (dataP[i].weaknesses[x] === weaknessesP) {
        newArray2.push(dataP[i])
      }
    }
  }
  return newArray2;
};

window.weak = weak;
