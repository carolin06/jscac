const no=400
console.log(no.toString().length);
console.log(no.toFixed(2)); //400.00

const no2=123.8966
console.log(no2.toPrecision(3))//round of first three digits
//if the no was 23.8966 then it owuld be 23.9 cuz there are only 2 nos before decimal point
//if digits is more than 4 then it will shoe in standard exponential form like 1.12e+3 for 1123.8966
//above no will be 123.9 if its 4 in the brackets for precision

const hun=1000000
console.log(hun.toLocaleString('en-US'))
console.log(hun.toLocaleString('en-IN'))

const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//to get single digit values with a given range
