// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();

// const PORT = process.env.PORT | 5000;
// const app = express();

// app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Book {
    title:String
    author:String
}
# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each
type Query{
    books:[Book]
}
`;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
