function calculate(a, b, callback){

return callback(a,b);
   
}

const add = (a,b)=>a+b;
const subtract = (a,b)=>a-b;
const multiply =(a,b)=>a*b;
const result= calculate(10,5,add)

console.log(result);
