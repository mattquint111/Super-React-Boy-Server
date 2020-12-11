const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

app.use(cors())
app.use(express.json())

const PORT = 8080

app.get('/test', (req,res) => {
    res.send('Server is working!')
})

app.get('/snake-scores', async (req, res) => {
    let snakeScores = await models.SnakeScore.findAll({
        order: [
            ["score", "DESC"]
        ],
        limit: 10
    })

    res.send(snakeScores)
})

app.post('/snake-scores', async (req,res) => {
    const name = req.body.name
    const score = req.body.score
    const difficulty = req.body.difficulty

    let snakeScore = await models.SnakeScore.create({
        name: name,
        score: score,
        difficulty: difficulty
    })

    console.log(snakeScore)

    res.send(snakeScore)

})

app.listen(PORT, () => {
    console.log('Server is running...')
})