//array specific loops

//for of loop
 
const arr=[1,2,3,4]
for(const i of arr){
    console.log(i)
} 

const g="heyo"
for(const j of g){
    console.log(j)
}

//MAPS

const map=new Map()

map.set("IN", "India")
map.set("AE", "UAEEE")

console.log(map)
//only unique values in map

// for(const k of map){
//     console.log(k)
// } //returns array

for(const [k,v] of map){
    console.log(k,":-",v)
}

//object is not iterable

//loop for objects
const obj={
    1:"hi",
    2:"bye"
}
for(const key in obj){
    console.log(key)
}
for(const key in obj){
    console.log(obj[key])
}
for(const key in obj){
    console.log(`${key}: ${obj[key]}`)
}

//this will work for arrays too but it will print keys as 0 1 2 3 so use arr[key] method
//this method cant be used on maps

const newarr=["a","b","c"]
newarr.forEach(function (val){
    console.log(val)
})

newarr.forEach((val)=>{
    console.log(val)
})

function print(item){
    console.log(item)
}

newarr.forEach(print)

const code=[
    {
        lang: "js",
        type:"none"
    },
    {
        lang:"py",
        type:"bye"
    },
]

code.forEach((item)=>{
    console.log(item.lang)
})

code.forEach((item,index,arr)=>{
    console.log(item.lang,index, arr)
})