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

app.get('/', (req, res) => {
    
})

app.listen(8000, () => {
    console.log('Server On!')
})
