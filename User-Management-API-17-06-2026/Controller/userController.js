const jwt =require('jsonwebtoken')
const db=require('../Config/db')
const users = [
    { id: 1, name: "Ketan", role: "admin" },
    { id: 2, name: "Akshay", role: "user" },
    { id: 3, name: "Rahul", role: "user" },
    { id: 4, name: "Priya", role: "user" },
    { id: 5, name: "Sneha", role: "admin" },
    { id: 6, name: "Amit", role: "user" },
    { id: 7, name: "Pooja", role: "user" },
    { id: 8, name: "Rohan", role: "admin" },
    { id: 9, name: "Neha", role: "user" },
    { id: 10, name: "Vikram", role: "user" }
];

const showUsers = async (req, res) => {
    try {
        const [row]=await db.query("SELECT * FROM employees")
        res.send([row])
        

    } catch (error) {
        console.log(error);

    }

}

const getOneUsers = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

                const [row]=await db.query(`SELECT * FROM employees Where=${id}`)
        res.send([row])

        // if (!user) {
        //     res.status(401).json({
        //         Message: "Invalid ID"
        //     })
        //     return 
        // }

        // res.send(user)
    } catch (error) {
        console.log(error);

    }

}

const addusers = async (req, res) => {
    try {
        const { name, role } = req.body
        if (name == "" || role == "") {
            res.status(401).json({
                Message: "Name and Role is required "
            })
             return
        }

        const user = {
            id: users.length + 1,
            name: name,
            role: role
        }
        const token = jwt.sign(
            {
                user
            },
            "ketan",
            {
                expiresIn:'2h'
            }

        )


        console.log(token);
        

        users.push(user)
        res.status(201).json({
            message: "Created Record Sucessfully",
            token
        })
    } catch (error) {
        console.log(error);

    }

}

const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const index = users.findIndex(item => item.id == id)
        const data = users.splice(index, 1)
        if (data == -1) {
            res.status(401).json({
                message: "Invalid id"
            })
            return
        }
        res.status(201).json({
            message: "Deleted Records Sucessfully",
            data: data
        })
    } catch (error) {
        console.log(error);

    }

}

const Update_one = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { name, role } = req.body


        if (name == "" || role == "") {
            res.status(401).json({
                Message: "Name and Role is required "
            })
        }

        const user = users.find(item => item.id === id)

        user.name = name
        user.role = role

        res.status(201).json({
            message: "Update Users",
        })

    } catch (error) {
        console.log(error);

    }

}

module.exports={
    showUsers,
    getOneUsers,
    addusers,
    deleteUser,
    Update_one
}