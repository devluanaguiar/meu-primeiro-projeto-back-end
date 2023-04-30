const express = require("express") //pegue express
const router = express.Router() // primeira parte da configuração da rota

const app = express()
const porta = 3333

function mostraOla(request, response ) { // criei uma função; parametros de requisição e resposta
    response.send("Olá, mundo!") // resposta.envia
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get("/ola", mostraOla)) // app usa a rota get, chamando o endereço ola para e dps chamar mostraOla
app.listen(porta, mostraPorta) //escute a porta e mostre ela
