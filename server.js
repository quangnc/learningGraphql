const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

require("dotenv").config();
const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
server.listen().then(({ url }) => {
  console.log(`server listing on ${url}`);
});
