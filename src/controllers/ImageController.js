const Image = require('../models/Image')


module.exports = {
    async index(request, response) {
        const images = await Image.find()

        return response.json(images)
    },
    async store(request, response) {

        const { originalname: name, size, filename: key, location: url = "" } = request.file;

        images = await Image.create({
            name,
            size,
            key,
            url
        })
        return response.json(images)
    },
    async delete(request, response) {

        const del = await Image.findById(request.params.id)

        await del.remove()

        return response.send()
    }
}