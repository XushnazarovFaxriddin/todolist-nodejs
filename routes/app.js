const express = require('express')
const app = express()

const todolist = require('./todolist')

app.use("/todolist", todolist)

module.exports = app