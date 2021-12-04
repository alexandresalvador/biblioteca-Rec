const mongoose = require("../database/index");
const LivroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Livro", LivroSchema);

/* 
-------
livro
-------
id: number,
nome: string,
descricao: string,
preco: number,
-----------------------------
Body Postman:
-------------------------------------------
{
    "nome": "",
    "descricao": "",
    "preco": 
}
*/