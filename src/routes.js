const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

//CONTROLLERS
const UserController = require("./controllers/UserController");
const SearchUserController = require("./controllers/SearchUserController");
const AnimeController = require("./controllers/AnimesController");
const SearchAnimeController = require("./controllers/SearchAnimesController");
const ImageController = require("./controllers/ImageController");

const testeController = require("./controllers/testeController");

const animeMiddleware = require("./middlewares/anime_middle");

const routes = Router();

//ANIMES ROUTES
routes.get("/animes", AnimeController.index);
routes.post("/animes", animeMiddleware, AnimeController.store);

routes.get("/search", SearchAnimeController.index);
routes.get("/search/day", SearchAnimeController.dayanimes);
routes.get("/search/season", SearchAnimeController.seasonanimes);

//IMAGES
routes.get("/images", ImageController.index);
routes.post(
  "/images",
  multer(multerConfig).single("file"),
  ImageController.store
);
routes.delete("/images/:id", ImageController.delete);

//USER ROUTES
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.post("/auth", UserController.authetication);

routes.get("/search_user", SearchUserController.index);

routes.get("/teste", animeMiddleware, testeController.index);
module.exports = routes;
