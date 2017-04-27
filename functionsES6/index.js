import { https } from "firebase-functions"
import { Router } from "express"

const server = new Router()
server.get("*", (req, res) => {
  res.send("Hello from Express on Cloud Functions for Firebase!")
})

export const helloWorld = https.onRequest(server)
