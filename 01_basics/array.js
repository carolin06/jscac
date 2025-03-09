const arr=new Array(1,2,3,4)
arr.push(6)

arr.unshift(12)
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.includes(5))

const newarr=arr.slice(1,3)
console.log(newarr)
console.log(arr)
const newarr2=arr.splice(1,3) //manipulates original array
console.log(newarr2)
console.log(arr)

// arr.push(newarr)
// console.log(arr)
// arr.concat(newarr)
// console.log(arr)
// const newnew=arr.concat(newarr)
// console.log(newnew)


const newnew=[...arr,...newarr]
console.log(newnew)

//arr.flat(arg)

console.log(Array.isArray("hello"))
console.log(Array.from("heyyy"))
console.log(Array.from({name:"heyyy"}))

//arr.of(x,y,z)