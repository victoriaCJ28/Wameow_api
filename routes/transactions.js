const express = require("express");
const transactionServices = require("../services/servicesTransactions");
const router = express.Router();

/**Metodo GET */
router.get("/", async (request, response, next) => {
  try {
    const transactions = await transactionServices.getAllTransactions(
      request,
      response
    );
    response.json(transactions);
  } catch (error) {
    next(error);
  }
});

/**Metodo POST */
router.post("/", async (request, response) => {
  const createTrans = await transactionServices.createNewTrans(
    request,
    response
  );
  response.json(createTrans);
});

/**Metodo PATCH */
router.patch("/:id", async (request, response) => {
  const updateTrans = await transactionServices.updateTrans(
    request,
    response
  );
  response.json(updateTrans);
});

/**Metodo DELETE */
router.delete("/:id", async (request, response) => {
  const deleteTrans = await transactionServices.deleteTransaction(
    request,
    response
  );
  response.json(deleteTrans);
});


module.exports = router;
