import express from "express";
import { ApolloServer } from "@apollo/server";
// import cors from "cors";
import bodyParser from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import axios from "axios";

import createApolloGraphqlServer from "./graphql";

async function startServer() {
  const app = express();
  

  app.use(bodyParser.json());
  // app.use(cors());


  const gqlServer=await createApolloGraphqlServer();
  app.use("/graphql", expressMiddleware(gqlServer));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
}


startServer();
