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
router.post("/", async (request, response, next) => {
  try {
    const createTrans = await transactionServices.createNewTrans(
      request,
      response
    );
    response.json(createTrans);
  } catch (error) {
    next(error);
  }
});

/**Metodo PATCH */
router.patch("/:id", async (request, response, next) => {
  try {
    const updateTrans = await transactionServices.updateTrans(
      request,
      response
    );
    response.json(updateTrans);
  } catch (error) {
    next(error);
  }
});

/**Metodo DELETE */
router.delete("/:id", async (request, response, next) => {
  try {
    const deleteTrans = await transactionServices.deleteTransaction(
      request,
      response
    );
    response.json(deleteTrans);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
