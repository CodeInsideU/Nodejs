const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan('tiny'))

const myMiddleware = require('./middleware/middleware')
app.use(myMiddleware)
app.use(function(req, res, next){
    console.log('I am second middleware')
    next()
})
let courses = [
    {id: 1, name: 'JavaScript'},
    {id: 2, name: 'C++'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'Python'}
]

app.get('/', (req, res) => {
        res.send('Hello!')
    })
    

app.get('/courses', (req,res) => {
    res.send(courses)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App is running on ${port}`))
