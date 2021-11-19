const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");

const db = admin.firestore();

//  post new item
router.post("/api/stock", async (request, response) => {
  // for the errors
  try {
    await db.collection("stock").doc().create({
      itemdescription: request.body.itemdescription,
      quantity: request.body.quantity,
      suppliersname: request.body.suppliersname,
      expirationdate: request.body.expirationdate,
    });
    return response.status(200).send(`message: item created successfully`);
  } catch {
    console.log(error);
    return response.status(500).send(error);
  }
});

// get 1 iterm

router.get("/api/stock/:item_id", (request, response) => {
  (async () => {
    try {
      const document = db.collection("stock").doc(request.params.item_id);
      const item = await document.get();
      const res = item.data();
      return response.status(200).json(res);
    } catch (error) {
      return response.status(500).send(error);
    }
  })();
});

// get all items

router.get("/api/stock", async (request, response) => {
  try {
    const query = db.collection("stock");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    const res = docs.map((document) => ({
      id: document.id,
      item_data: document.data(),
    }));
    return response.status(200).json(res);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// delete one item

router.delete("/api/stock/:item_id", async (request, response) => {
  try {
    const document = db.collection("stock").doc(request.params.item_id);
    await document.delete();
    return response.status(200).send(`message: item deleted successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

//  update one item ( using put)

router.put("/api/stock/:item_id", async (request, response) => {
  try {
    const document = db.collection("stock").doc(request.params.item_id);
    await document.update({
      itemdescription: request.body.itemdescription,
      quantity: request.body.quantity,
      suppliersname: request.body.suppliersname,
      expirationdate: request.body.expirationdate,
    });
    return response.status(200).send(`message: item updated successfully`);
  } catch (error) {
    return response.status(500).json();
  }
});

module.exports = router;
