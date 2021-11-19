const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

// use firestore database
const db = admin.firestore();

// add new item to agenda
router.post("/api/agenda", async (request, response) => {
  // for the errors
  try {
    await db.collection("agenda").doc(/*auto generated id */).create({
      patientsid: request.body.patientsid,
      date: request.body.date, // timestamp
      hour: request.body.hour, // timestamp
      names: request.body.names,
      lastname: request.body.lastname,
      notes: request.body.notes, // string
    });
    return response
      .status(200)
      .send(`message: Agenda item created successfully`);
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 agenda item

router.get("/api/agenda/:agenda_id", (request, response) => {
  (async () => {
    try {
      const document = db.collection("agenda").doc(request.params.agenda_id);
      const item = await document.get();
      const res = item.data();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(500).send(error);
    }
  })();
});

// get all items in the agenda

router.get("/api/agenda", async (request, response) => {
  try {
    const query = db.collection("agenda");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    const res = docs.map((document) => ({
      id: document.id,
      patient_data: document.data(),
    }));
    return response.status(200).json(res);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// delete one patient

router.delete("/api/agenda/:agenda_id", async (request, response) => {
  try {
    const document = db.collection("agenda").doc(request.params.patient_id);
    await document.delete();
    return response
      .status(200)
      .send(`message: Agenda item deleted successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

//  update one item in the agenda ( using put)

router.put("/api/agenda/:agenda_id", async (request, response) => {
  try {
    const document = db.collection("agenda").doc(request.params.agenda_id);
    await document.update({
      date: request.body.date, // timestamp
      hour: request.body.hour, // timestamp
      names: request.body.names,
      lastname: request.body.lastname,
      notes: request.body.notes, // string
    });
    return response
      .status(200)
      .send(`message: Agenda item updated successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
