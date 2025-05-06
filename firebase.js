// require('dotenv').config();
// const admin = require('firebase-admin');

// // Fix private key formatting (replace escaped \n with actual newlines)
// const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: privateKey,
//   }),
// });

// const db = admin.firestore();
// const usersCollection = db.collection('users');

// module.exports = { db, usersCollection };




const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const usersCollection = db.collection('users');

module.exports = { db, usersCollection };