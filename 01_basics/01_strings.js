const name="carolin"
const age=19;

console.log(`hello my name is ${name} and my age is ${age}`);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2))
console.log(name.indexOf('l'))
const newname=name.substring(0,4)//cant give negative values
console.log(newname)
const another=name.slice(-5,-2)
console.log(another)
const newstr="  car  "
console.log(newstr.trim())
const url="https://carolin%20anto"

console.log(url.replace('%20','-'))
console.log(url.includes('carolin'))
const arr=url.split("%")
console.log(arr)