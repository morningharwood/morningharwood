const admin = require('firebase-admin');

var serviceAccount = require('./service-token.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
console.log(db);
