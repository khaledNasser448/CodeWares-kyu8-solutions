function sumWithoutHeighestAndLowestNumbers(array){
    if(array == null) return 0;
    return array
    .sort((a, b) => a - b)
    .slice(1,-1)
    .reduce((acc,curr)=> acc+curr,0);
}
console.log(sumWithoutHeighestAndLowestNumbers([1, 1, 11, 2, 3]));



