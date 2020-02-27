const User = require('../models/User')


module.exports = {
    async index(request, response) {
        const users = await User.find()

        return response.json(users)
    },
    async store(request, response) {
        const { name, email, favorites, img_url, password, admin } = request.body;

        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({
                name,
                email,
                favorites,
                img_url,
                password,
                admin
            })
        }

        return response.json(user)
    }

}