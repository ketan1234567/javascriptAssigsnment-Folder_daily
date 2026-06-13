const express=require('express');

const app=express()

const employees = [
  {
    id: 1,
    name: "Ketan",
    role: "PHP Developer"
  },
  {
    id: 2,
    name: "Akshay",
    role: "Node.js Developer"
  },
  {
    id: 3,
    name: "Krushna",
    role: "Angular Developer"
  },
  {
    id: 4,
    name: "Rohit",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Sanket",
    role: "Backend Developer"
  },
  {
    id: 6,
    name: "Amit",
    role: "Full Stack Developer"
  },
  {
    id: 7,
    name: "Priya",
    role: "UI Developer"
  },
  {
    id: 8,
    name: "Neha",
    role: "React Developer"
  },
  {
    id: 9,
    name: "Pooja",
    role: "Software Engineer"
  },
  {
    id: 10,
    name: "Vikas",
    role: "DevOps Engineer"
  }
];


app.listen(3000,()=>{
    console.log("start_server_Running");
})

app.get("/employee",(req,res)=>{
    try {
        res.send(employees)
    } catch (error) {
        console.log(error);
        
    }
})

app.use(express.json())

app.get("/employee/:id",(req,res)=>{
    try {
       const id=parseInt(req.params.id)
     //  console.log(id);
       
       const user=employees.find(item=> item.id==id
        
       )
      // console.log(user);
       
       if (!user) {
        res.status(404).json({
            message:"User_id Not Found"
        })
       }

       res.send(user)
    } catch (error) {
        console.log(error);
        
    }
})



app.post("/employee",(req,res)=>{
    try {
        console.log(req.body);
        
     const {name,email}=req.body

     if (name==="" || email==="") {
        res.status(404).json({
            message:"Name required and  Role required"

        })

        return
     }
 
     const create_one={
        id:employees.length+1,
        name:name,
        email:email
     }

     employees.push(create_one)

     res.status(200).json({
        Message:"Employee Created Sucessfuuly",
       employees
     })

    
    } catch (error) {
        console.log(error);
        
    }
})

app.put("/employee/:id",(req,res)=>{
    try {
        const id =parseInt(req.params.id)

        //console.log(id);
        

        const {name,role}=req.body


       const Update_users=employees.find(item=> item.id==id)
      


       if (!Update_users) {
        res.status(404).json({
            message:"User_id not Found"
        })
       }

       



Update_users.name =req.body.name
Update_users.role = req.body.role


    
       res.send(employees)
    } catch (error) {
        console.log(error);
        
    }
})


app.delete("/employee/:id",(req,res)=>{
    try {
        const id=  parseInt(req.params.id)

        const index=employees.findIndex(item=>item.id==id)
        const data= employees.splice(index,1)
      
        if (index===-1) {
            res.status(404).json({
          message:"User_id is invalid"
          
            })
            return 
        }

        res.status(200).json({
            message:"Deleted Employee Sucessfully",
            data

        })
        
    } catch (error) {
        console.log(error);
        
    }
  
})