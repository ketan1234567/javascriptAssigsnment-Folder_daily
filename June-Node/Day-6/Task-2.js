function fetchProducts(){
    return new Promise((resolve, reject) => {
    console.log("Products Loaded");
    
        setTimeout(() => {
            
            resolve(
                [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
]
            )
        }, 2000);
    })
}


fetchProducts().then((value)=>{
    console.log(value);
    
}).catch((error)=>{
    console.log(error);
    
})