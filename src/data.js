//FUNCIÓN ORDENAR A-Z /Z-A
const order = (a, b) => {
  if (a.name > b.name)
    return 1;
  if (a.name < b.name)
    return -1;
  return 0;
};
window.order = order;
//FILTRADO POR TIPO
const filter = (data, typeP) => {
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
//FILTRADO POR DEBILIDAD  
const weak = (data, weaknessesP) => {
  const newArrayWeak = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].weaknesses.length; x++) {
      if (data[i].weaknesses[x] === weaknessesP) {
        newArrayWeak.push(data[i])
      }
    }
  }
  return newArrayWeak;
};
window.weak = weak;
//FILTRADO POR HUEVOS
const filterEgg = (data, selectEgg) => {
  const newArrayEgg = [];
  for (let i=0; i<data.length; i++) {
    if (data[i].egg === selectEgg){
    newArrayEgg.push(data[i]);
    }
  }
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
