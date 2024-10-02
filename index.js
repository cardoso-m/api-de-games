const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var DB = {
    games: [
        {
            id: 3,
            title: 'Call of Duty MW',
            year: 2019,
            price: 230
        },
        {
            id: 45,
            title: 'Sea of Thieves',
            year: 2017,
            price: 170
        },
        {
            id: 12,
            title: 'Minecraft',
            year: 2012,
            price: 80
        }
    ]
}

app.get('/games', (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.get("/game/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)

        var game = DB.games.find(game => game.id == id)

        if (game) {
            res.sendStatus = 200
            res.send(game)
        } else {
            res.sendStatus(404)
        }
    }
})

app.listen(8000, () => {
    console.log('Server On!')
})
