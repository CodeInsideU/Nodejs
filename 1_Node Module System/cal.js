function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(b-a)
}
function mult(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}


module.exports = {
    addition: add,
    multiplication: mult,
    subtraction: sub,
    division: div
}