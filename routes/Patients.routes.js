const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

// use firestore database
const db = admin.firestore();

// post new Patient
router.post("/api/patients", async (request, response) => {
  // for the errors
  try {
    await db
      .collection("patients")
      .doc("/" + request.body.id + "/")
      .create({
        name: request.body.name,
        birthDate: request.body.birthDate,
        address: request.body.address,
        phone: request.body.phone,
        checkin: request.body.checkin,
        departure: request.body.departure,
      });
    return response.status(200).send(`message: "Patient created successfully`);
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 patient

router.get("/api/patients/:patient_id", (request, response) => {
  (async () => {
    try {
      const document = db.collection("patients").doc(request.params.patient_id);
      const item = await document.get();
      const res = item.data();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(500).send(error);
    }
  })();
});

// get all patients

router.get("/api/patients", async (request, response) => {
  try {
    const query = db.collection("patients");
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

router.delete("/api/patients/:patient_id", async (request, response) => {
  try {
    const document = db.collection("patients").doc(request.params.patient_id);
    await document.delete();
    return response.status(200).send(`message: Patient deleted successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

//  update one patients ( using put)

router.put("/api/patients/:patient_id", async (request, response) => {
  try {
    const document = db.collection("patients").doc(request.params.patient_id);
    await document.update({
      name: request.body.name,
    });
    return response.status(200).send(`message: Patient updated successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
