const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({ message: 'hello world' })
})

app.post('/', (req, res) => {
    const { name, password } = req.body

    res.json({ message: 'user', name })
})

app.listen(3333, () => console.log('Server running @ port 3333'))