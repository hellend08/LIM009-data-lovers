//FUNCIÓN ORDENAR A-Z /Z-A
const compareSortData = (elemA, elemB) => {
  if (elemA.name > elemB.name)
    return 1;
  if (elemA.name < elemB.name)
    return -1;
};

const sortData = (data, sortBy) => {
  let sortedData = data.sort(compareSortData);
  if (sortBy === "Az") {
    return sortedData;
  } else if (sortBy === "Za") {
    return sortedData.reverse();
  }
  return data;
}
window.sortData = sortData;
//FILTRADO POR TIPO //USAR FILTER
const filterData = (data, condition, type) => {
  const newArrayType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i][type].length; x++) {
      if (data[i][type][x] === condition) {
        newArrayType.push(data[i])
      }
    }
  }
  return newArrayType;
};
window.filterData = filterData;
//FILTRADO POR HUEVOS // USAR FILTER
const filterEgg = (data, condition) => {
  const newArrayEgg = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].egg === condition) {
      newArrayEgg.push(data[i]);
    }
  }
  return newArrayEgg;
};
window.filterEgg = filterEgg;

//SUMA PESO TODOS LOS POKEMONES***
window.computeStats = {
  statsPromedy: (data, type) => {
    let finalResult;
    let sumWeight = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i][type]) {
        const number = data[i][type];
        const onlyNumber = number.split(" ");
        sumWeight += parseFloat(onlyNumber); 
      }
    }
    finalResult = sumWeight/data.length;
    return finalResult.toFixed(2);
  },
};
//UTILIZAR ARRAY PARA RECORRER MAS NO EL FOR. 