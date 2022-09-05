const express = require("express")

const server = express()

server.use(express.urlencoded({extended: false}))
server.use(express.json())
server.use(require("cors")())

server.use("/api/v1/", require("./api/v1/router.js"))

module.exports = server