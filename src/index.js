const express = require("express")
const cors = require('cors')

const API_PORT = 3333;

const app = express()

app.use(cors())

app.use(express.json())



app.listen(API_PORT, () => {
    console.log('Server Rodando http://localhost:' + API_PORT)
})

