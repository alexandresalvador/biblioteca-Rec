const mongoose = require("../database");
const Pedido = mongoose.model("Pedido");


module.exports = {
    async index(req, res) {
        const pedido = await Pedido.find()
        .populate('cliente')
        .populate('livro')
        return res.json(pedido);
    },

    async show(req, res) {
        const PEDIDOid = req.params.id;
        const pedido = await Pedido.findById(PEDIDOid)
        if(!pedido) {
            res.json({message: 'Pedido nao existe'});
        }
        return res.json(pedido);
    },

    async save(req, res) {
        const pedido = await Pedido.create(req.body)
        return res.json(pedido);
    },
    async destroy(req, res) {
        const pedido = await Pedido.findByIdAndRemove(req.params.id);
        return res.json({message: 'Pedido removido com sucesso'});
    },
    async update(req, res) {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        return res.json(pedido);
    }
};