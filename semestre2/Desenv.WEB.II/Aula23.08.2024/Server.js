import express from 'express'
const app = express()
const port = 3000
app.use(express.json())

app.get('/',(requisacao,resposta)=>{
    resposta.send('Hello World!')
})

app.get('/teste',(requisacao,resposta)=>{
    resposta.send('Test OK!')
})

app.get('/tabuada',(requisacao,resposta)=>{
    const numero = 3
    let tabuadaPronta = ''
    for(let i = 1; i <= 10; i++){
        tabuadaPronta += `<p>${numero}X${i}=${numero*i}</p>`
    }
    resposta.send(tabuadaPronta)
})
// node server.js - rodar a API
app.listen(port, ()=>{
    console.log(`API Rodando em http://localhost:${port}`)
})