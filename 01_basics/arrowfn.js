//global object in browser is window

const user={
    username: "carolin",
    price: 100,

    msg: function(){
        console.log(`${this.username}, welcome`);
        console.log(this);

    }
}

user.msg() //"this" wont work like this inside regular functions

const addtwo=function(num1,num2) {
    return num1+num2;
}

console.log(addtwo(1,2))

const addtwoo=(num1,num2)=> {
    return num1+num2;
}

//or const addtwoo=(num1,num2)=> num1+num2;


console.log(addtwo(1,2))

const addt=(num1,num2) => ({username: "carolin"})


