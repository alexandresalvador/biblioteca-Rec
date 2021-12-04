const mongoose = require("../database");
const Livro = mongoose.model("Livro");


module.exports = {
    async index(req, res) {
        const livro = await Livro.find()
        return res.json(livro);
    },

    async show(req, res) {
        const livro = await Livro.findById(req.params.id)
        return res.json(livro);
    },

    async save(req, res) {
        const livro = await Livro.create(req.body)
        return res.json(livro);
    },
    async destroy(req, res) {
        const livro = await Livro.findByIdAndRemove(req.params.id);
        return res.json({message: 'Livro removido com sucesso'});
    },
    async update(req, res) {
        const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        return res.json(livro);
    }
};

