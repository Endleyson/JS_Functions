//somar (3)(4)(5)

function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
const somarAB = somar(3)(4)
console.log(somarAB(14))
console.log(somar(10)(20)(30))

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}
function subtrair(a,b){
    return a - b
}
function multiplicar(a,b){
    return a * b
}
function dividir(a,b){
    return a / b
}
const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)
const r3 = calcular(10)(5)(dividir)

console.log(r1)
console.log(r2)
console.log(r3)