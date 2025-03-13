const num=[1,2,3,4,5]
const newnum=num.filter((n)=> n>2)
console.log(newnum)

//{} implies scope so inside that return statement is a must

const newnew=num.filter((n)=>{
    return n>2
})
console.log(newnew)

const mynum=[]

num.forEach((n)=>{
    if(n>4){
        mynum.push(n)
    }
})

console.log(mynum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks=books.filter((bk)=>bk.genre==="History")
  
 userBooks=books.filter((bk)=>bk.publish>=1999&&bk.genre==="Science")
 console.log(userBooks)

 const mynumbers=[1,2,3,4,5]
 const newnums=mynumbers.map((num)=>num+10)
console.log(newnums)

const newest=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newest)

const numbers=[1,2,3,4]

// const total=numbers.reduce(function(acc,curval){
//     return acc+curval
// },5)

const total=numbers.reduce((acc,currval)=> acc+currval,0)
console.log(total)

//if we are using object then format is (acc,item) and acc+item.price