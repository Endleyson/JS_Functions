/* 
*Functions that operate on other functions,
*either by taking them arguments or by
*returning them, are called higher-order functions
*/

function run(fn){
    return fn()
}
function sayHello(){
    console.log("hello!")
}

run(sayHello)
run(function(){
    console.log('RUNN!!')
})

const result = run(Math.random)
console.log(result)