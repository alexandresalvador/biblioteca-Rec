const express = require("express");
const routes = express.Router();

const LivroController = require("./controllers/LivroController");
const ClienteController = require("./controllers/ClienteController");
const PedidoController = require("./controllers/PedidoController");

// rotas de livros

routes.get("/livro", LivroController.index);
routes.post("/livro", LivroController.save);
routes.delete("/livro/:id", LivroController.destroy);
routes.get("/livro/:id", LivroController.show);
routes.put("/livro/:id", LivroController.update);

// rotas de clientes

routes.get("/cliente", ClienteController.index);
routes.post("/cliente", ClienteController.save);
routes.delete("/cliente/:id", ClienteController.destroy);
routes.get("/cliente/:id", ClienteController.show);
routes.put("/cliente/:id", ClienteController.update);

// rotas de pedidos

routes.get("/pedido", PedidoController.index);
routes.post("/pedido", PedidoController.save);
routes.delete("/pedido/:id", PedidoController.destroy);
routes.get("/pedido/:id", PedidoController.show);
routes.put("/pedido/:id", PedidoController.update);

module.exports = routes;