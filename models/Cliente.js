const mongoose = require("../database/index");
const crypto = require('crypto');
const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    min: 6,
    max: 10,
    set: value => 
    crypto
          .createHash('md5')
          .update(value)
          .digest('hex'),
  },
});

mongoose.model("Cliente", ClienteSchema);

/* 
cliente:

id: number,
nome: string,
email: string,
telefone: string,
endereço: string,
senha: string,

jogar no postman:
{
    "nome": "",
    "email": "",
    "telefone": "",
    "endereco": "",
    "senha": "",
}
*/