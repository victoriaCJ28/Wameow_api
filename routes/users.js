const express = require("express");
const userServices = require("../services/servicesUsers");
const categoryServices = require("../services/servicesCategories");
const transServices = require("../services/servicesTransactions");
const router = express.Router();

/**Metodo GET */
router.get("/", async (request, response, next) => {
  try {
    const users = await userServices.getAllUsers(
     
    );
    response.json(users);
  } catch (error) {
    next(error);
  }
});

/**Metodo POST */
router.post("/", async (request, response) => {
  const createdUser = await userServices.createNewUser(
    request,
  );
  response.json(createdUser);
});

/**Metodo PATCH */
router.patch("/:id", async (request, response) => {
  const updateUser = await userServices.updateUsers(
    request,
    response
  );
  response.json(updateUser);
});

/**Metodo DELETE */
router.delete("/:id", async (request, response) => {
  const deletedUser = await userServices.deleteUsers(
    request,
    response
  );
  response.json(deletedUser);
});

/** GET by OneUser */
router.get("/login", async (request, response) => {
  const getOneUser = await userServices.getOneUser(
    request,
    response
  );
  response.json(getOneUser);
});

/** GET categories by USER */
router.get("/:id/categories", async (request, response, next) => {
    try {
        const categoriesByUser = await categoryServices.getByUserID(
            request
          
          );
          response.json(categoriesByUser);
    } catch(error) {
        next(error)
    }
    
  });

  /** GET transactions by USER */
router.get("/:id/transactions", async (request, response, next) => {
  try {
      const TransByUser = await transServices.getByUserID(
          request
        
        );
        response.json(TransByUser);
  } catch(error) {
      next(error)
  }
  
});

module.exports = router;
