function say(){
    console.log("HI");
}

say()

//NaN= not a number

const user={
    username: "carolin",
    price: 199


}
function handle(object){
    console.log(`Username is ${object.username} and price is ${object.price}`)
}

handle(user)

function calculate(...num){
    return num
}

console.log(calculate(200,300,400))

handle({
    username: "heyyy",
    price: 200
})

//SCOPE

//{} is called scope 

addone(5)

function addone(num){
    return num+1

}//this wont give error

addtwo(5)
const addtwo=function(num){
    return num+1
}//this gives error cuz of hoisting
