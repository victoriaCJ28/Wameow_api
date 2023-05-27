const prisma = require("../server/prisma");

const getAllCategories = () => {
  try {
    const categories = prisma.category.findMany();

    return categories;
  } catch (error) {
    console.log(error);
  }
};

const createNewCategory = (request) => {
  try {
    const body = request.body;
    const category = prisma.category.create({
      data: {
        user_id: body.user_id,
        name: body.name,
        type: body.type,
      },
    });

    return category;
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = (request) => {
  try {
    const { id } = request.params;
  
    const body = request.body;
    console.log(body);
    const updateCategory = prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: body,
    });
    return updateCategory;
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = (request) => {
  try {
    
    const { id } = request.params;
    const deleteCategory = prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deleteCategory;
  } catch (error) {
    console.log(error);
  }
};


const getByUserID = (request) => {
    try {
      
        const { id } = request.params;
        const categoriesByUser =  prisma.category.findMany({
            where: {
                OR: [{user_id: parseInt(id)},
                    {can_be_deleted: false},]
              
            },
          

          })
       return categoriesByUser; 
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
  getByUserID
};