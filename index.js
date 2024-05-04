const express = require("express")
require('dotenv').config()
const { dbConnection } = require('./config/dbConnection')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello from express server")
})
app.listen(PORT, () => {
    console.log("localhost://" + PORT + " is running");
})