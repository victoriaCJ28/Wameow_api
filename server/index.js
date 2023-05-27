const usersRouter=require('../routes/users');
const categoriesRouter=require('../routes/categories');
const transactionsRouter=require('../routes/transactions');
const express=require('express');


function apiRouter(app){
    const router=express.Router();
    app.use('/api/v1',router);
    router.use('/users',usersRouter);
    router.use('/categories',categoriesRouter);
    router.use('/transactions',transactionsRouter);

}

module.exports=apiRouter;