//object literals

const user={
    name: "carolin",
    age: 19, //"age" is also right
    location: "Jaipur",
}

console.log(user.name)
console.log(user["age"])

user.name="mia"
console.log(user.name)
// Object.freeze(user)
user.name="hetu"
console.log(user)

// user.greet=function(){
//     console.log(`hello ${this.name}`)
// }
// console.log(user.greet())

//singleton object
//const user=new Object()

//non-singleton
//const user={}

const mul={
    age:19,
    fullname: {
        names: {
            another: "hi",
            new: "hiiii",

            }
        }
    
}
console.log(mul.fullname.names.another)

// const obj3={user,mul}

// const obj3=Object.assign({},user,mul)
const obj3={...user,...mul}
console.log(obj3)

//obj.keys
//obj.values
//obj.entries
//.hasOwnProperty 



//DESTRUCTURING

const{fullname: fn}=mul
console.log(fn)