//FUNCIÓN ORDENAR A-Z /Z-A
const order = (a, b) => {
  if (a.name > b.name)
    return 1;
  if (a.name < b.name)
    return -1;
  return 0;
};
// window.order = order;
//FILTRADO POR TIPO
const filterData = (data, condition) => {
  const newArrayType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        newArrayType.push(data[i])
      }
    }
  }
  return newArrayType; //[name, img, type] array de arrays
};
// window.filterData = filterData;
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
// window.weak = weak;
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
// window.filterEgg = filterEgg;

//SUMA PESO TODOS LOS POKEMONES***
window.computeStats = {
  weight: (data) => {
    let sumWeight = 0;
    let finalResultWeight = 0;
    for ( let i=0; i<data.length; i++) {
      if (data[i].weight){
      const number = data[i].weight;
      const separated = number.split('');
      const onlyNumber = parseFloat(separated[0] + separated[1] + separated[2] + separated[3]);

      finalResultWeight = sumWeight += parseInt(onlyNumber.toFixed())/ 151;
      } 
    }
  return finalResultWeight.toFixed();
  },
  height: (data) => {
    let sumheight = 0;
    let finalResultheight = 0;
    for ( let i=0; i<data.length; i++) {
      if (data[i].height){
      const numberSecond = data[i].height;
      const separatedSecond = numberSecond.split('');
      const onlyNumberSecond = parseFloat(separatedSecond[0] + separatedSecond[1] + separatedSecond[2] + separatedSecond[3]);
    
      finalResultheight = sumheight += parseInt(onlyNumberSecond.toFixed())/151;
      }
    }
  return finalResultheight.toFixed();
  }
}

window.dataPokemon = {
  order,
  weak,
  filterData,
  filterEgg, 
  computeStats,
};