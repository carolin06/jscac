//IIFE

//()() 1st bracket for function definition and second one for execution call call
//used to remove global scope pollution

(function news(){
    console.log(`news`);
})();

(()=>{
    console.log(`news`);
})();

((name)=>{
    console.log(`${name}`);
})("carolin");

