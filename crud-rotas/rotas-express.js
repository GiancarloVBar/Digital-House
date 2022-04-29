/* 
app.METODO(CAMINHO, MANIPULADOR)

app = é a variável que salva a execução do express
METODO = get, post, put, delete
CAMINHO = se refere a uma própria toda em si /produtos; /contatos
MANIPULADOR = uma função responsável por definir o que acontece
    quando uma rota é acessada

Exemplo
app.get('/', function (req, res){
    res.send('Seção inicial - Bem-vindo)
})

O CALLBACK - segundo parâmetro no método da rota
receberá dois parâmetros:
1) requisição (objeto literal) - solicitado
2) resposta (objeto literal) - resposta do servidor

o corpo da função conterá toda a lógica do que deve acontecer
quando a rota for acessada

res.send('texto') => é uma resposta par ao cliente ver no
navegador
*/

const express = require('express')

let app = express()