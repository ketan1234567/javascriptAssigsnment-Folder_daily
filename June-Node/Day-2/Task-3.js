function getProduct(id) {
return new Promise((resolve, reject) => {
    if (id>0) {
        resolve({id:id,name:"Samsung"})
    } else {
        reject("invalid id")
    }
})
    
}



async function main() {
   try {
    const Data= await getProduct(1)
    console.log(Data);
    return Data
    
   } catch(err) {
    console.log(err);
    
      // handle
   }
}

main()