// getUser(id)
// getOrders(userId)


function getUser(id) {
 try {
  return new Promise((resolve, reject) => {
    if (id===1) {
      resolve({id:id,name:"Ketan"})
    } else {
      
    }
  })
 } catch (error) {
  console.log(error);
 }
}

function getOrders(user) {
  try {
    return new Promise((resolve, reject) => {
      if (!user.id) {
        reject("Order not Found")
      }
      resolve({...user,Orders:"Order Sucessfully"})
    })
    
  } catch (error) {
    console.log(error);
    
    
  }
  
}

async function showall() {
  try {
    const data= await getUser(1)
    const demo= await getOrders(data)
    console.log(demo);
    
  } catch (error) {
    console.log(error);
    
    
  }
  
}

showall()