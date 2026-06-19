console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

process.nextTick(()=>{
    console.log("first_priority");
    
})

console.log("End");