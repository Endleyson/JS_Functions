//FUNCTION EXPRESSION
const increment1 = function (n){
    return n + 1
}
//ARROW FUNCTION
const increment2 = (n) =>{
    return n + 1
}
const increment3 = n =>{
    return n + 1
}
const increment4 = n => n + 1

console.log(increment1(0))
console.log(increment2(10))
console.log(increment3(100))
console.log(increment4(1000))