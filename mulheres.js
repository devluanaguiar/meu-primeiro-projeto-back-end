const express = require("express") //pegue express
const router = express.Router() //configuração de rota

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Luana Aguiar',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eris_and_Dysnomia_art.png/330px-Eris_and_Dysnomia_art.png',
        minibio: 'Estudante de Engenharia de Software'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eris_and_Dysnomia_art.png/330px-Eris_and_Dysnomia_art.png',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Eris_and_Dysnomia_art.png/330px-Eris_and_Dysnomia_art.png',
        minibio: 'Hacker antirracista' 
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta) //escute a porta e mostre ela
