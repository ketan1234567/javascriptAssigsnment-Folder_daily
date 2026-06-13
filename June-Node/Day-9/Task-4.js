const express=require('express')
const app=express()

    const users = [
  { id: 1, name: "Ketan" },
  { id: 2, name: "Akshay" },
  { id: 3, name: "Krushna" }
];


app.listen(3000,()=>{
    console.log("start_server_Running");
    
})


app.delete("/users/:id",(req,res)=>{
       //console.log(req.params.id);
       
    try {
            
        const id=parseInt(req.params.id)

        const index = users.findIndex(item=>item.id===id)

               if (!index-1) {
                //console.log("i am inside if ");
                
 res.status(404).json({
            message:"User not Foud"
 
        })
        
           
        }
 

        const response= users.splice(index,1)


 res.status(200).json({
            message:"User Deleted",
            user:users
        })
        


       
    
       return response
        
    } catch (error) {
        console.log(error);
        
        
    }
})