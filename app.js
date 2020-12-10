const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const PORT = 8080

app.get('/test', (req,res) => {
    res.send('Server is working!')
})

app.listen(PORT, () => {
    console.log('Server is running...')
})