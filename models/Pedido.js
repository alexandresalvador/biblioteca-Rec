const mongoose = require("../database/index");
const PedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livro",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Pedido", PedidoSchema);

/*
------
PEDIDO
------
Cliente
Livro
CreatedAt
----------------------------
Body Postman:
------------------------------------------
{
    "cliente": "",
    "livro": ""
}
*/