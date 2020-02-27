const Anime = require('../models/Anime')


module.exports = {
    async index(request, response) {
        const { title } = request.body;

        let anime = await User.findOne({ title })

        if (anime) {
            return response.json(anime)
        }

        return response.json({
            "error": "Anime not find"
        })

    },


}