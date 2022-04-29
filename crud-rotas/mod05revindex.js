const express = require("express")

const app = express()

app.use(express.json())

const users = ['Eu','Eu mesmo']

/* 
    Query Params = www.mercadolivre.com/carrinho=?camisa=masculina
    Route Params = identifica um recurso na rota
    Request Body = responsável por trazer a informação do corpo da requisição

*/

//ROTA RESPONSÁVEL POR BUSCAR UMA POSICAO DO MEU ARRAY
app.get('/users/:index', (req, res) => {
    const{index} = req.params

    return res.json(users[index])
})

//ROTA RESPONSÁVEL POR BUSCAR TODOS OS USUARIOS
app.get('/users', (req, res) => {
    return res.json(users)
})


app.post('/users', (req, res) => {
    const {name} = req.body

    users.push(name)
    
    return res.json(users)
})

app.put('/users/:index', (req, res) => {
    const { index } = req.params    //Primeiro recebo o index
    const { name } = req.body       // Atualizo o usuário

    users[index] = name

    return res.json(name)
})

app.delete('/users/:index', (req, res) => {
    const { index } = req.params
    users.splice(index, 1)


    return res.send()
})

app.listen(8080)