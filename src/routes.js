const { Router } = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

//CONTROLLERS
const UserController = require('./controllers/UserController')
const SearchUserController = require('./controllers/SearchUserController')
const AnimeController = require('./controllers/AnimesController')
const SearchAnimeController = require('./controllers/SearchAnimesController')


const routes = Router()


//ANIMES ROUTES
routes.get('/animes', AnimeController.index)
routes.post('/animes', multer(multerConfig).single('file'), AnimeController.store)

routes.get('/search', SearchAnimeController.index)


//USER ROUTES
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/search_user', SearchUserController.index)

module.exports = routes