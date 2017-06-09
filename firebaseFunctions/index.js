import { https } from "firebase-functions"
import setupGraphQLServer from "./graphql/server"

/* CF for Firebase with graphql-server-express */
const graphQLServer = setupGraphQLServer()

// https://us-central1-<project-name>.cloudfunctions.net/api
export const api = https.onRequest(graphQLServer)
