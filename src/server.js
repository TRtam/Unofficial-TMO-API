const express = require("express")

const server = express()

server.set(express.urlencoded({extended: false}))
server.set(express.json())

server.use("/api/v1/", require("./api/v1/router.js"))

module.exports = server