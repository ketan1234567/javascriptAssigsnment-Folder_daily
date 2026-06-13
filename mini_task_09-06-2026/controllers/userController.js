

const users = [
    { id: 1, name: "ketan" },
    { id: 2, name: "akshay" },
    { id: 3, name: "krushna" }
]

const getUser = async(req, res) => {
    
res.status(200).json(users)


}

const getOneUser = async(req, res) => {
    const id = parseInt(req.params.id)
    const user=users.find((item)=>{
        return item.id===id
    })

    if (!user) {
       return res.status(404).json("User Id Not Found")
    }

return res.status(200).json(user)
}

const createUser = async(req, res) => {

const main_one =req.body.name
const count=0
count+1
const Update_one_object={
    id:users.length+1,
    name:main_one
}

const demo=users.push(Update_one_object)

res.status(200).json({
    message:"User_Added",
 demo
})

}

const deleteUser = async(req, res) => {
    const id=parseInt(req.params.id)
    //console.log(id);
    

const index = users.findIndex(item => item.id === id);
const response=users.splice(index,1)


    return res.status(200).json({
        message:"User Deleted",
        response
    })

    
    

}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const Update_name =req.body.name
    //console.log(Update_name);
    
    const user=users.find((item)=>{
        return item.id ===id
    })



    if (!user) {
       return res.status(404).json("User Id Not Found")
    }

    user.name=Update_name


    
    //console.log(user);

    res.status(200).json({
        message:"User Updated",
        user
    })
    


    


}


module.exports ={
    getUser,
    getOneUser,
     createUser,
     deleteUser,
    updateUser
}