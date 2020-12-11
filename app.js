const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

app.use(cors())
app.use(express.json())

const PORT = 8080

// test score //
//build score model
// let testScore = models.SnakeScore.build({
//     name: "Jane Doe",
//     score: 9001,
//     difficulty: 'hard'
// })
// // send score model to DB
// testScore.save()
//     .then( (persistedScore) => {
//         console.log(persistedScore)
//     })
// // read all     scores from DB
// models.SnakeScore.findAll()
//     .then( scores => console.log(scores))
// find score by PK
models.SnakeScore.findAll({
    where: {
        id: 2
    }
}).then( score => console.log(score))

app.get('/test', (req,res) => {
    res.send('Server is working!')
})

app.listen(PORT, () => {
    console.log('Server is running...')
})