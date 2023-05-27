const express = require("express");
const categoryServices = require("../services/servicesCategories");
const router = express.Router();

/**Metodo GET */
router.get("/", async (request, response, next) => {
  try {
    const categories = await categoryServices.getAllCategories(
      request,
      response
    );
    response.json(categories);
  } catch (error) {
    next(error);
  }
});

/**Metodo POST */
router.post("/", async (request, response, next) => {
  try {
    const createCategory = await categoryServices.createNewCategory(
      request,
      response
    );
    response.json(createCategory);
  } catch (error) {
    next(error);
  }
});

/**Metodo PATCH */
router.patch("/:id", async (request, response, next) => {
  try {
    const updateCategory = await categoryServices.updateCategory(
      request,
      response
    );
    response.json(updateCategory);
  } catch (error) {
    next(error);
  }
});

/**Metodo DELETE */
router.delete("/:id", async (request, response, next) => {
  try {
    const deleteCategory = await categoryServices.deleteCategory(
      request,
      response
    );
    response.json(deleteCategory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
