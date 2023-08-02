require("dotenv").config()

const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("welcome")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


