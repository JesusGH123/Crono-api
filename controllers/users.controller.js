const db = require("../helpers/firestore");
const userCollection = db.collection("User")

// Returns all users
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

// Returns a specific user by id
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

// Creates a new user
module.exports.create_user = async (req, res) => {
    try {
        const userRef = userCollection.doc();
        await userRef.set(req.body);
        res.status(200).send("User created successfully");
    } catch (error) {
        console.error("Error getting users: ", error);
        res.status(500).send("Internal server error");
    }
}

// Deletes a specific user
module.exports.delete_user = async (req, res) => {
    let userId = req.params.id;

    try {
        await userCollection.doc(userId).delete();
        res.status(200).send("User deleted successfully");
    } catch (error) {
        console.error("Error deleting user: ", error);
        res.status(500).send("Internal server error");
    }
}

// Updates a specific user
module.exports.update_user = async (req, res) => {
    let userId = req.params.id;
    let updatedUser = req.body;

    try {
        const userRef = userCollection.doc(userId);
        await userRef.update(updatedUser);
        res.status(200).send("User updated successfully");
    } catch (error) {
        console.error("Error updating user: ", error);
        res.status(500).send("Internal server error");
    }
}