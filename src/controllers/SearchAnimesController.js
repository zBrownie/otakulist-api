const Anime = require("../models/Anime");

module.exports = {
  async index(request, response) {
    const { id } = request.id;
    let anime = await Anime.findOne({ id });

    if (anime) {
      return response.json(anime);
    }

    return response.json({
      error: "Anime not find"
    });
  },
  async dayanimes(request, response) {
    let anime = await Anime.find({ streaming: true, pos: new Date().getDay() });

    if (anime) {
      return response.json(anime);
    }

    return response.json({
      error: "Anime not find"
    });
  },
  async seasonanimes(request, response) {
    let anime = await Anime.find({ streaming: true }).sort({ pos: -1 });

    if (anime) {
      return response.json(anime);
    }

    return response.json({
      error: "Anime not find"
    });
  }
};
