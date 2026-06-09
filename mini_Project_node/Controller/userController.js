

const users = [
    { id: 1, name: "Ketan" },
    { id: 2, name: "Rahul" }
];



const getuser = async (req, res) => {
    try {

        const demo = users.map((item) => {
            return item
        })

        res.status(200).json({
            users: demo
        })

    } catch (error) {
        console.log(error);

    }
}


const oneidDatagetting = async (req, res) => {
    try {

        const id = parseInt(req.params.id)

        const result = users.find(item => item.id === id)

        if (!result) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(result)

    } catch (error) {
        console.log(error);

    }
}

const UpdatedUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const { name } = req.body;

        const user = users.find(item => item.id === id)

        if (!user) {
            return "User not Found"
        }

        user.name = name

        return res.json({
            message: "User Updated",
            user
        });


    } catch (error) {
        console.log(error);

    }
}


const created_User = async (req, res) => {
    try {

        // console.log(req.body.name);


        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Name is required"
            });
        }

        const user = {
            id: users.length + 1,
            name
        };

        users.push(user);

        return res.status(201).json({
            message: "User Added",
            user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
}

const delete_User = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const index = users.findIndex(item => item.id === id);
        const deletedUser = users[index];
        if (index == -1) {
            return res.status(404).json({
                message: "User not Found"
            });
        }

        users.splice(index, 1);

        return res.json({
            message: "User deleted",

        });


    } catch (error) {
        console.log(error);

    }
}


const SearcUser = async (req, res) => {
    try {

        const { name } = req.query;

        if (!name) {
            return res.status(400).json({
                message: "Name query parameter is required"
            });
        }

        const result = users.find(item => item.name === name);

        if (!result) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        return res.status(200).json(result);

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server Error"
        });
    }
};



module.exports = {
    UpdatedUser,
    getuser,
    oneidDatagetting,
    created_User,
    delete_User,
    SearcUser
}