const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

const db = admin.firestore();

//  post new item
router.post("/api/inventory", async (request, response) => {
  // for the errors
  try {
    await db
      .collection("inventory")
      .doc("/" + request.body.id + "/")
      .create({ name: request.body.name });
    return response.status(204).json({ message: "Item created successfully" });
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 iterm

router.get("/api/inventory/:item_id", (request, response) => {
  async () => {
    try {
      const document = db.collection("inventory").doc(request.params.item_id);
      const item = await document.get();
      const response = item.data();
      return response.status(200).json(response);
    } catch (error) {
      return response.status(500).send(error);
    }
  };
});

// get all items

router.get("/api/inventory", async (request, response) => {
  try {
    const query = db.collection("inventory");
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

// delete one item

router.delete("/api/inventory/:item_id", async (request, response) => {
  try {
    const document = db.collection("inventory").doc(request.params.item_id);
    await document.delete();
    return response.status(200).json();
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
