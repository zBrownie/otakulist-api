const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function generateToken(params = {}) {
  return jwt.sign(params, process.env.AUTH_SECRET, {
    expiresIn: 10000000 // 3 MONTHS
  });
}

module.exports = {
  async index(request, response) {
    const users = await User.find();

    users.password = undefined;

    return response.json(users);
  },
  async store(request, response) {
    const { name, email, favorites, img_url, password, admin } = request.body;

    let user = await User.findOne({ email });

    if (!user) {
      const hash = await bcrypt.hash(password, 10);

      user = await User.create({
        name,
        email,
        favorites,
        img_url,
        password: hash,
        admin
      });
    }

    user.password = undefined;

    return response.send({ user, token: generateToken({ id: user._id }) });
  },
  async authetication(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return response.status(400).send({ error: "User not found" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return response.status(400).send({ error: "Invalid password" });
    }

    user.password = undefined;

    return response.send({ user, token: generateToken({ id: user._id }) });
  }
};
