const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

// use firestore database
const db = admin.firestore();

// post new Patient

router.post("/api/patients", async (request, response) => {
  // for the errors
  try {
    await db.collection("patients").doc(/*"/" + request.body.id + "/*/).create({
      names: request.body.names,
      lastname: request.body.lastname,
      birthdate: request.body.birthdate,
      gender: request.body.gender,
      phonenumber: request.body.phonenumber,
      address: request.body.address,
      minor: request.body.minor,
      guardianfullname: request.body.guardianfullname,
      guardianphonenumber: request.body.guardianphonenumber,
      guardianaddress: request.body.guardianaddress,
      ailments: request.body.ailments,
    });
    return response.status(200).send(`message: patient created successfully`);
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
      names: request.body.names,
      lastname: request.body.lastname,
      birthdate: request.body.birthdate,
      gender: request.body.gender,
      phonenumber: request.body.phonenumber,
      address: request.body.address,
      minor: request.body.minor,
      guardianfullname: request.body.guardianfullname,
      guardianphonenumber: request.body.guardianphonenumber,
      guardianaddress: request.body.guardianaddress,
      ailments: request.body.ailments,
    });
    return response.status(200).send(`message: Patient updated successfully`);
  } catch (error) {
    return response.status(500).json(error);
  }
});

module.exports = router;
