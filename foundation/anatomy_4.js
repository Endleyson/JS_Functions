//Anonymous Function
//IIFE -  Immediately Invoked Function Expression
(function (a, b, c){
    let x =3
    console.log(`Result: ${a+b+c}`)
    console.log(x)
})(10,20,30);

(function(){
    let x = 300
    console.log(x)
}());

(() => {
    console.log(`Arrow #01`)
})();

(() => console.log(`Arrow #02`))();
