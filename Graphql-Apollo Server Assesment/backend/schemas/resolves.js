const Products = require("../models/schema");
const Mutations = {
  Query: {
    getAllProducts: async () => {
      try {
        const products = await Products.find();
        return products;
      } catch (error) {
        throw new Error(`Error fetching products: ${error}`);
      }
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      try {
        const { product_name, price, product_des, product_image } = args;

        const createProduct = new Products({
          product_name,
          price,
          product_des,
          product_image,
        });
        const savedProduct = await createProduct.save();
        return savedProduct;
      } catch (error) {
        throw new Error(`Product is not created successfully:${error}`);
      }
    },
    updateProduct: async (_, args) => {
      try {
        const { id, product_name, price, product_des, product_image } = args;
        const updateProduct = await Products.findByCategoryId(
          id,
          { product_name, price, product_des, product_image },
          {
            new: true,
          }
        );
        if (!updateProduct) {
          throw new Error("product not found");
        }
        return updateProduct;
      } catch (error) {
        throw new Error(`Error updating user: $ {error}`);
      }
    },
    deleteProduct: async (_, args) => {
      try {
        const { id } = args;
        const deleteProduct = await Products.findByCategoryIdAndRemove(id);
        if (!deleteProduct) {
          throw new Error("product not found");
        }
        return deleteProduct;
      } catch (error) {
        throw new Error(`Error deleting Product: ${error}`);
      }
    },
  },
};
module.exports = Mutations;
