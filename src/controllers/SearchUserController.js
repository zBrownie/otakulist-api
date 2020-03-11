const User = require('../models/User')


module.exports = {
    async index(request, response) {
        const { email, password } = request.body;

        let user = await User.findOne({ email, password })

        if (user) {
            return response.json(user)
        }

        return response.json({
            "error": "User not find"
        })

    },


}