require('dotenv').config()

const express = require("express")
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')
const morgan = require('morgan')

const API_PORT = 3333;

const app = express()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(routes)

app.listen(process.env.PORT || API_PORT)