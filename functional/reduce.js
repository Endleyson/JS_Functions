//reduce

const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total +el

const media = (total, el, i, array) => {
    if(i === array.length - 1){
        return (total + el)/array.length
    }else{
        return total + el
    }
}    
const total = numbers.reduce(sum)
const totalMedia = numbers.reduce(media)
console.log(total)
console.log(totalMedia)
