let admin = require("firebase-admin");
let serviceAccount = require("C:/Users/Jesus/OneDrive/Documents/Crono/crono-app-65277-firebase-adminsdk-fbsvc-ac571ca492.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;