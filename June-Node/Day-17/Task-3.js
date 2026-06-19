function calculate(a, b, callback){
    return callback(a,b)
}



console.log(calculate(10,20,(a,b)=>a+b));


