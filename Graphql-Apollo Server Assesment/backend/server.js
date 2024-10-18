const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const typeDefs = require("./schemas/typedefs");
const resolvers = require("./schemas/resolves");
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  const port = process.env.PORT || 4000;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on https://localhost:${port}/graphql`);
    });
  } catch (error) {
    console.error("error connecting to MongoDB:", error);
  }
}
startServer();
