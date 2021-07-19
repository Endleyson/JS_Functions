/*
*A programming language is said to have
*First-class functions when functios in
* that language are treated like any another variable
*/
const add = function(a,b){
    return a+b 
}

const sub = function(a,b){
    return a-b 
}

const mult = (x , y) => x*y

const div = (x , y) => x/y

console.log(add(10 ,20))
console.log(sub(10 ,20))
console.log(mult(10 ,20))
console.log(div(10 ,20))