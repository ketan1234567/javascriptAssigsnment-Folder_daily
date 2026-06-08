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


async function showProducts(){
    try {
        const profuct= await fetchProducts()
        console.log(profuct);
        return profuct
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}

showProducts()