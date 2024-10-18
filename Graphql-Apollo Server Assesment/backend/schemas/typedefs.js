const { gql } = require("apollo-server-express");
const typedefs = gql`
  type Product {
    _id: String
    product_name: String!
    price: Int!
    product_des: String
    product_image: String
  }
  type Query {
    getAllProducts: [Product]!
  }
  type Mutation {
    createProduct(
      product_name: String
      price: Int
      product_des: String
      product_image: String
    ): Product
    updateProduct(
      id: ID!
      product_name: String
      price: Int
      product_des: String
      product_image: String
    ): Product
    deleteProduct(id: ID!): Product
  }
`;
module.exports = typedefs;
