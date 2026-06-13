function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Done");
            
        }, ms);
    })
}

delay(2000).then((value)=>[
    console.log(value)
    
])