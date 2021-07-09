//PARAMS

function logParams(a = 1, b = 2, c = 3){
    console.log(a, b, c)
}
logParams(10,20,30,40,50)
logParams(10,20,30)
logParams(10,20)
logParams(10)
logParams()

//PARAMS ARRAY
function logNums(nums){
    for (let n of nums){
        console.log(n)
    }
}
logNums([1,2,3,4,5,6,7,8,9])

//SPREAD/REST
function logNums2(...nums){
        console.log(nums)    
}
logNums2(1,2,3,4,5,6,7,8,9)


function sumAll(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    return total   
}
console.log(sumAll(1,2,3,4,5,6,7,8,9))