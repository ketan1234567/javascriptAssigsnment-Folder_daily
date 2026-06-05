function getOrder(orderId){
    return new Promise((resolve, reject) => {
        if (orderId===101) {
            resolve({
                 orderId: 101,
                product: "Laptop"
            })
        } else {
            reject("id not found")
        }
    })
}

getOrder(101).then((value)=>{console.log(value);
}).catch((error)=>{
    console.log(error);
    
})