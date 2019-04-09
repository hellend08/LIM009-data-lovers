//FUNCIÓN ORDENAR A-Z /Z-A
const compareSortData = (elemA, elemB) => {
  if (elemA.name > elemB.name)
    return 1;
  if (elemA.name < elemB.name)
    return -1;
  return 0;
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
window.filterData = filterData;
//FILTRADO POR DEBILIDAD  
const filterWeak = (data, condition) => {
  const newArrayWeak = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].weaknesses.length; x++) {
      if (data[i].weaknesses[x] === condition) {
        newArrayWeak.push(data[i])
      }
    }
  }
  return newArrayWeak;
};
window.filterWeak = filterWeak;
//FILTRADO POR HUEVOS
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
  weight: (data) => {
    let finalResultWeight;
    let sumWeight = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].weight) {
        const number = data[i].weight;
        const onlyNumber = number.split(" ");
        sumWeight += parseFloat(onlyNumber); 
      }
    }
    finalResultWeight = sumWeight/data.length;
    return finalResultWeight.toFixed(2);
  },
  height: (data) => {
    let finalResultheight;
    let sumheight = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].height) {
        const numberSecond = data[i].height;
        const onlyNumberSecond = numberSecond.split(" ");
        sumheight += parseFloat(onlyNumberSecond);
      }
    }
    finalResultheight = sumheight/data.length;
    return finalResultheight.toFixed(2);
  }
}