// arrow function

const msg = () => console.log('Uma mensagem foi enviada')
msg()

const saudacao = (nome) => "Seja bem vindo(a) "+nome+", fique a vontade!"
console.log(saudacao('José'))

const saudacao2 = nome =>`Bom dia ${nome}, em que posso ajudar!`
console.log(saudacao2('Maria'))

const somar = (...num) =>{
    let total = 0
    for(let n of num){
        total += n
    }
    return total
}

console.log(somar(1,2,3,4,5,6,7,8,9))
console.log(somar(1,2,3,4))
console.log(somar(1,2,3,4,5,6,7,8,9,10,11))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))