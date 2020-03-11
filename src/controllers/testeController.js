module.exports = {
  async index(req, resp) {
    return resp.send({ msg: "ok", id: req.userId });
  }
};
