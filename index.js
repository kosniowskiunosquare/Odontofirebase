const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
// to fix cors error
const cors = require("cors");

// use express
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// initialize app
admin.initializeApp({
  credential: admin.credential.applicationDefault(), //admin.credential.cert("./serviceAccountKey.json"),
  databaseURL: "https://odontomanager-95368-default-rtdb.firebaseio.com",
});
// use firestore database
const db = admin.firestore();

// *********CRUD********//
// import crud from patients
app.use(require("./routes/Patients.routes"));
// import crud from Stock
app.use(require("./routes/Stock.routes"));
// import crud from medical Records
app.use(require("./routes/MedicalRecords.routes"));
// import crud from payments
app.use(require("./routes/Payments.routes"));
// import crud from agenda
app.use(require("./routes/Agenda.routes"));
// import crud from users
app.use(require("./routes/Users.routes"));

// function app
exports.app = functions.https.onRequest(app);
