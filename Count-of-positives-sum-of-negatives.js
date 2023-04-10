// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    let arrOfpositives = [];
    let sumOfNegatives = 0;
    let emptyArr = [];
    if( input === null || input.length == 0){
        return emptyArr;
    }
    for(let i =0 ; i < input.length ; i++){
        if( input[i] > 0 ){
            arrOfpositives.push(input[i]);
        }else{
            sumOfNegatives += input[i];
        }
    }
    return [ arrOfpositives.length , sumOfNegatives ];

}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// or
function countPositivesSumNegatives(input) {
    let emptyArr = [];
    if( input === null || input.length == 0){
        return emptyArr;
    }
    let sumOfPositivesArray =  input.filter((x)=> x > 0 ,0).length;
    let summitionOfNegatives = input
    .filter((x)=> x < 0 )
    .reduce((acc,curr) => acc+ curr,0);
    return  [sumOfPositivesArray,summitionOfNegatives];

}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));