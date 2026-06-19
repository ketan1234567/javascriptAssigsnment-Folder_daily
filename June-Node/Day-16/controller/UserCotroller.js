const db=require('../Config/db')

const ShowAllusers=async(req,res)=>{
    try {
        const [row]= await db.query("SELECT * FROM employees")
        res.send(row)
    } catch (error) {
        console.log(error);

    }

}

const adduser=async(req,res)=>{
    try {
        const {name ,salary}=req.body
        const [result]=await db.query("INSERT INTO employees(name,salary)values(?,?)",[name,salary])
const row=result[0]    
console.log(row);

    } catch (error) {
        console.log(error);

    }

}


const show_one_user=async(req,res)=>{
    try {
        const id =parseInt(req.params.id)
        const [row]=await db.query(`SELECT * FROM employees where id=?`,[id])
// console.log(row);
// console.log(typeof row);
// console.log(row.length);
         if (row.length===0) {
            res.status(404).json({
                message:"User_id Not Found"
            })
            return 
         }

         res.send(row[0])

       
    } catch (error) {
        console.log(error);

    }

}


const Update_one_user=async(req,res)=>{
    try {
        console.log(req.body.salary);
        
        const id =  parseInt(req.params.id)
        const {salary}=req.body
     
        const [result]= await db.query("UPDATE employees  set salary=? WHERE id=?",[salary,id])
        
        const row=result[0]
        console.log(row);
        res.status(200).json({
            Message:"Updated Records Sucessfully"
        })
    } catch (error) {
        console.log(error);

    }

}


const delete_one_user=async(req,res)=>{
    try {
        const id = parseInt(req.params.id)
       const [result]= await db.query("DELETE employees FROM WHERE id=?",[id])

        const row=result[0]
        console.log(row);
      
    } catch (error) {
        console.log(error);

    }

}



module.exports={
    ShowAllusers,
    show_one_user,
    adduser,
    Update_one_user,
delete_one_user

}