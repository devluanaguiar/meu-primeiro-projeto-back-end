const express = require("express") //pegue express
const router = express.Router() // configuração de rota

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json ({ // envia infos (objeto) pela net
        nome: 'Luana Aguiar',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eris_and_Dysnomia_art.png/330px-Eris_and_Dysnomia_art.png',
        minibio: 'Estudante de Engenharia de Software'
    })
} 

function mostraPorta() {
  console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher)) 
app.listen(porta, mostraPorta) //escute a porta e mostre ela
