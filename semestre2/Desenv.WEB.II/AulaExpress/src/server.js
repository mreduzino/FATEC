console.log('Hello World')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server executando em http://localhost:${PORT}`)
  })