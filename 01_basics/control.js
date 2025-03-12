//var has completely global scope so even if a variable is declared inside a function it can be accessed outside
//this is the disadvantage of using var

//in switch, if we dont add break then everyhing except default case will ve executed

//falsy values:
//false,0,-0, BigInt 0n, "", null, undefined, NaN


//interesting truthy values:
//"0","false", " ", [], {}, function(){}
//everything else is also truthy values

//if(truthy values) this will be executed
//if(falsy values) this wont be executed

//Object.keys(obj) returns an array


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
// console.log(val1) //o/p is 5

// val1=null??10
// console.log(val1) //o/p is 10

// val1=undefined??15
// console.log(val1) //o/p is 15

val1=null??10??13
console.log(val1) //first value will be printed

//ternary::  condition?true:false
const price=100 
price>=200? console.log("yes"): console.log("no")