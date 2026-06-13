

const users = [
    { id: 1, name: "ketan" },
    { id: 2, name: "akshay" },
    { id: 3, name: "krushna" }
]


const getUser=async(req,res)=>{
    try {
       if (users) {
        res.status(200).json(users)
       }else{
        res.status(404).json({
            message:"User  Not Found"
        })
       }
    } catch (error) {
        console.log(error);
        
        
    }
}

const getOneUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id)

        const user=users.find(item=>item.id===id)

        if (!user) {
            res.status(404).json({
                Message:"User Not Found"
            })
        }

        res.status(200).json({
            user:user
        })

    } catch (error) {
        console.log(error);
        
    }
}

const createUser=async(req,res)=>{
    try {
       const name=req.body.name


       if (!name) {
        res.status(400).json({
            message:"Name is Required"
        })
    return
       }

       
       const  add_user_one={
        id:users.length+1,
        name:name
       }

       const demo_one=users.push(add_user_one)
    
       res.status(200).json({
        message:"User_Added",
        demo_one
       })


    } catch (error) {
        console.log(error);
        
    }
}




module.exports ={
    getUser,
     getOneUser,
     createUser,
    //  deleteUser,
    // updateUser
}