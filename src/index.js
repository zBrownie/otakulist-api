require('dotenv').config()

const express = require("express")
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')
const morgan = require('morgan')
    // CONNECT MONGODB mongodb+srv://brownie:<password>@cluster0-iwz84.mongodb.net/test?retryWrites=true&w=majority
const API_PORT = 3333;

const app = express()

mongoose.connect('mongodb+srv://brownie:643512@cluster0-iwz84.mongodb.net/OtakuList?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(routes)

app.listen(process.env.PORT || 3333)