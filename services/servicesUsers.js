const prisma = require("../server/prisma");

const getAllUsers = () => {
  try {
    const users = prisma.user.findMany();

    return users;
  } catch (error) {
    console.log(error);
  }
};

const createNewUser = (request) => {
  try {
    const body = request.body;
    const user = prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = (request) => {
  try {
    const { id } = request.params;
    // if(id!=1){

    //  // throw boom.notFound('Username not found');
    // }
    const body = request.body;
    console.log(body);
    const updateUser = prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: body
    });
    return updateUser;
  } catch (error) {
    console.log(error);
  }
};

const deleteUsers = (request) => {
  try {
    const { id } = request.params;
    const deleteUser = prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deleteUser;
  } catch (error) {
    console.log(error);
  }
};
const getOneUser = (request, response) => {
  try {
    
    const body = request.body;
    const findUser =  prisma.user.findFirst ({
      where:{
        username: body.username,
        password: body.password
      }
    })
    return findUser;
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  getAllUsers,
  createNewUser,
  updateUsers,
  deleteUsers,
  getOneUser
  
};
