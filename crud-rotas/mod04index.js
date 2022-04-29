//importando os módulos
const express = require("express")

const { v4 } = require("uuid") //v4 gera o tipo de ID especifico que quer

/**
 * dessa forma consigo acessar todos os recursos do express
 * mas dessa maneira é ruim trazer uma rota do tipo get, post, delete
 *      ou iniciar um servidor
 * então, vamos atribuir outra variável
 * como o 'express' está importanto um modulo, ele se torna uma função
 */

const app = express() //informando que é uma função

        app.use(express.json())
        //todo conteudo que for criar dentro do CRUD
        //tem que ser em formato de json

        //vamos criar um array que será o banco de dados fake
        const usuarios = ["Giancarlo", "Amanda", "jacuzi"]

/**
 * criar um arquivo dentro do src chamado server.js
 * a variavel 'app' consegue iniciar um servidor
 * exportar o modulo
 * 
 */

module.exports = app

/**
 * vamos criar uma rota /users para exibir uma mensagem só pra ver o servidor
 * funcionando
 * GET - listar
 * POST - criar
 * PUT - atualizar
 * DELETE - deletar
 */

//--------------
//GET
//--------------
app.get('/users', (request, response) => {
    return response.json(usuarios/*{message: "Saaaalve"}*/)
})

/**
 * Agora para rodar o servidor
 * 'node src/server.js' + enter (ctrl+c para parar o servidor)
 * se retornar nada, é porque o servidor está rodando
 * abrir o navegador e acessar 'localhost:8080/users'
 * 
 *      Na linha 5 do package.json tem o "main" (arquivo principal do servidor)
 *      mudar o index para src/server.js
 * 
 *      Na parte de "scripts", colocar "start": "nodemon" para iniciar o servidor
 * 
 *      Esse procedimento serve para ganho de produtividade, pois quando
 *      há alterações, ele reinicia o servidor. Não precisa parar e começar de
 *      novo.
 * 
 */

/**
 * 
 *  Request body - utilizado para trafegar as informações em JSON
 *  Request params - utilizado para passar recursos nas rotas
 *  Request query - busca informações no banco de dados
 *  Router Params - identificador de parametros dentro da minha rota
 * 
 *  CRUD - CREAT (POST) READ (GET) UPDATE (PUT/PATCH) DELETE (DELETE)
 * 
 * Preciso voltar ali depois de const.app para passar alguns atributos
 * de dentro do express (linha 12)
 * 
 */

// ALTERAÇÕES DA AULA 13

//--------------
//POST
//--------------

app.post('/users', (request, response) => {
    const { name, email, phone } = request.body; //isso não cria nada ainda, só recebe as infos do front end

    const usuario = { id: v4(), name, email, phone} //persistindo a info

    //instalar o uuid para gerar IDs de usuario para não ter duplicado
    //volta no inicio do codigo e importa o uuid
    //adicionar o id no usuario acima

    usuarios.push(usuario)

    return response.json(usuario)
})

//--------------
//PUT
//--------------

app.put('/users/:id', (request, response) => {
    const { id } = request.params                   //verifica se existe
    const { name, email, phone } = request.body
    
    const userIndex = usuarios.findIndex(usuario => usuario.id === id)

    if( userIndex < 0) {
        return response.status(400).json({error: 'Usuário não encontrado'})
    }

    const usuario = {
        id,
        name,
        email,
        phone
    }

    usuarios[userIndex] = usuario

    return response.json(usuario)
    
})

//--------------
//DELETE
//--------------

app.delete('/users/:id', (request, response) => {
    const { id } = request.params

    const userIndex = usuarios.findIndex(usuario => usuario.id === id)

    if( userIndex < 0) {
        return response.status(400).json({error: 'Usuário não encontrado'})
    }

    usuarios.splice(userIndex, 1)

    return response.status(201).send()

})
