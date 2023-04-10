// You get an array of numbers, return the sum of all of the positives ones.
function posituveSum(arr){
    let c=0;
    for(i = 0; i<arr.length;i++){
        if(arr[i]>0){
        c += arr[i];
        }
    }
    return c;
}
    console.log(posituveSum([1,-3,5,9]));

// or
function posituveSum(arr){
    return arr.filter((x)=> x>0).reduce((acc,curr)=> acc+curr,0);
}
console.log(posituveSum([1,-3,5,9]));