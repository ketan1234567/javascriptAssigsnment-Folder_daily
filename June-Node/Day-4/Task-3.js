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

async function showOrder(){
    try {
        const data= await getOrder(101)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
        
    }
}

showOrder()