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
      .create({ name: request.body.name });
    return response
      .status(204)
      .json({ message: "Patient created successfully" });
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 patient

router.get("/api/patients/:patient_id", (request, response) => {
  async () => {
    try {
      const document = db.collection("patients").doc(request.params.patient_id);
      const item = await document.get();
      const response = item.data();
      return response.status(200).json(response);
    } catch (error) {
      return response.status(500).send(error);
    }
  };
});

// get all patients

router.get("/api/patients", async (request, response) => {
  try {
    const query = db.collection("patients");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    const response = docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));
    return response.status(200).json(response);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// delete one patient

router.delete("/api/patients/:patient_id", async (request, response) => {
  try {
    const document = db.collection("patients").doc(request.params.patient_id);
    await document.delete();
    return response.status(200).json();
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
    return response.status(200).json();
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
