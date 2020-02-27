const Anime = require('../models/Anime')


module.exports = {
    async index(request, response) {
        const animes = await Anime.find()

        return response.json(animes)
    },
    async store(request, response) {

        const { title, link, link2, pos, dia, desc, streaming } = request.body;

        const { location: img_url = "" } = request.file;

        let anime = await Anime.findOne({ title, link })

        if (!anime) {
            anime = await Anime.create({
                title,
                link,
                link2,
                pos,
                dia,
                desc,
                streaming,
                img_url
            })
        }

        return response.json(anime)
    }
}