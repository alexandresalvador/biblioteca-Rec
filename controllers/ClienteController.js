const mongoose = require("../database");
const Cliente = mongoose.model("Cliente");


module.exports = {
  async index(req, res) {
    const cliente = await Cliente.find();
    return res.json(cliente);
  },

  async show(req, res) {
    const cliente = await Cliente.findById(req.params.id);
    return res.json(cliente);
  },

  async save(req, res) {
    const cliente = await Cliente.create(req.body);
    return res.json(cliente);
  },

  async destroy(req, res) {
    const cliente = await Cliente.findByIdAndRemove(req.params.id);
    return res.json({ message: "Cliente removido com sucesso" });
  },

  async update(req, res) {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(cliente);
  },
};