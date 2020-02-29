const Anime = require('../models/Anime')


module.exports = {
    async index(request, response) {
        const animes = await Anime.find()

        return response.json(animes)
    },
    async store(request, response) {

        const { title, link, link2, pos, dia, desc, streaming, img_url } = request.body;

        let anime = await Anime.findOne({ title })

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