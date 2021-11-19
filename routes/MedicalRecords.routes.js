const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

// use firestore database
const db = admin.firestore();

// Add new medical record
router.post("/api/medical_records", async (request, response) => {
  // for the errors
  try {
    await db.collection("medical_records").doc().create({
      patientsid: request.body.patientsid,
      initialdiagnosis: request.body.initialdiagnosis,
      dateentry: request.body.dateentry,
      procedureperformed: request.body.procedureperformed,
      nextprocedure: request.body.nextprocedure,
      newitemsused: request.body.newitemsused,
    });
    return response
      .status(200)
      .send(`message: Medical record created successfully`);
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 medical record

router.get("/api/medical_records/:patient_id", (request, response) => {
  (async () => {
    try {
      const document = db
        .collection("medical_records")
        .doc(request.params.patient_id);
      const item = await document.get();
      const res = item.data();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(500).send(error);
    }
  })();
});

// get all medical records

router.get("/api/medical_records", async (request, response) => {
  try {
    const query = db.collection("medical_records");
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

// delete one medical_record

router.delete("/api/medical_records/:patient_id", async (request, response) => {
  try {
    const document = db
      .collection("medical_records")
      .doc(request.params.patient_id);
    await document.delete();
    return response
      .status(200)
      .send(`message: medical record deleted successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

//  update one medical record ( using put)

router.put("/api/medical_records/:medical_id", async (request, response) => {
  try {
    const document = db
      .collection("medical_records")
      .doc(request.params.medical_id);
    await document.update({
      initialdiagnosis: request.body.initialdiagnosis,
      dateentry: request.body.dateentry,
      procedureperformed: request.body.procedureperformed,
      nextprocedure: request.body.nextprocedure,
      newitemsused: request.body.newitemsused,
    });
    return response
      .status(200)
      .send(`message: Medical record updated successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
