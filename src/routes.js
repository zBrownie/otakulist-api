const { Router } = require('express')


const routes = Router()

routes.get('/',(request,response)=>{
    response.send("API WORK")
})


module.exports = routes

