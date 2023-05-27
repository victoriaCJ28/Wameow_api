const prisma = require("../server/prisma");

const getAllTransactions = () => {
  try {
    const transactions = prisma.transaction.findMany();

    return transactions;
  } catch (error) {
    console.log(error);
  }
};

const createNewTrans = async (request) => {
  try {
    const body = request.body;

    const transaction = prisma.transaction.create({
      data: {
        amount: body.amount,
        category_id: body.category_id,
        user_id: body.user_id,
        description: body.description,
      },
    });

    return transaction;
  } catch (error) {
    console.log(error);
  }
};

const updateTrans = async (request) => {
  try {
    const { id } = request.params;

    const body = request.body;
    console.log(body);

    const updateTransaction = prisma.transaction.update({
      where: {
        id: parseInt(id),
      },
      data: body,
    });
    return updateTransaction;
  } catch (error) {
    console.log(error);
  }
};

const deleteTransaction = async (request) => {
  try {
    const { id } = request.params;

    const deleteTrans = prisma.transaction.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deleteTrans;
  } catch (error) {
    console.log(error);
  }
};

const getByUserID = (request) => {
  try {
    const { id } = request.params;
    const categoriesByUser = prisma.transaction.findMany({
      where: {
        user_id: parseInt(id),
      },
      include: {
        category: true
      },
      orderBy: {created_at: 'desc'}
    });
    return categoriesByUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTransactions,
  createNewTrans,
  updateTrans,
  deleteTransaction,
  getByUserID,
};
