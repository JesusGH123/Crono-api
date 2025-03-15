const db = require("../helpers/firestore");
const userCollection = db.collection("User")

module.exports.get_users = async (_, res) => {
    try {
        const userRef = await userCollection.get();
        const users = userRef.docs.map((user) => ({
            id: user.id,
            ...user.data()
        }));
        res.json(users);
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Internal server error");
    }
}

module.exports.get_user = async (req, res) => {
    let userId = req.params.id;

    try {
        const userRef = userCollection.doc(userId);
        const user = await userRef.get()
        res.json({
            id: user.id,
            ...user.data()
        });
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Internal server error");
    }
}

module.exports.create_user = async (req, res) => {
    try {
        const userRef = userCollection.doc();
        const resp = await userRef.set(req.body);
        res.status(200).send("User created successfully");
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Internal server error");
    }
}

module.exports.delete_user = async (req, res) => {
    // To do: delete an existing user
}

module.exports.update_user = async (req, res) => {
    // To do: update an existing user
}