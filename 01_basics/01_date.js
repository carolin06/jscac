let mydate=new Date()
console.log(mydate.toDateString())
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
//type is an object
//month starts from 0
let create=new Date(2025,2,8,5,3)
console.log(create.toLocaleString())

//Time

let mytime=Date.now()
console.log(mytime) //gives time in milliseconds
console.log(mydate.getTime())

console.log(mydate.getFullYear())

newdate.toLocaleString('default',{
    weekday:"long"
})
