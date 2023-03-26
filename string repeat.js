function repeatStr (n, s) {
    let string = [];
    for(let i = 0 ; i < n ; i++){
        string+= s;
        
    }
    return `${string}`
}
console.log(repeatStr(6,"k"));
// or
function  repeatStr (n, s){
    return s.repeat(n);
}
console.log(repeatStr(6,"k"));


