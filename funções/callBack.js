//calBack

function exc(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (x,y) => console.log(x+y)
const SubtrairNoTerminal = (x,y) => console.log(x-y)

exc(somarNoTerminal, 56, 40)
exc(SubtrairNoTerminal, 156, 57)

setInterval(function(){
    console.log('Testando...')
},5000)