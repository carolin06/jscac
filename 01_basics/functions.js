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