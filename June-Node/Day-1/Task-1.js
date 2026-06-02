function getUser(id, callback){
    try {
        setTimeout(() => {
            callback({id:id,username:"Ketan_deshmukh",User_Addres:"sai Vihar Udgir"})
        }, 1000);
        
    } catch (error) {
       console.log(error);
        
    }


}

getUser(1, function (user) { 
console.log(user);
 })