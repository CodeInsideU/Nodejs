const express = require('express')

const app = express()

app.use(express.json())

// get, post, put, delete
// app.get('/', (req, res) => {
//     res.send('Hello!')
// })

// app.get('/about', (req, res) => {
//     res.send('I create impact')
// })

// app.get('/home', (req, res) => {
//     res.send('This is homepage')
// })


// app.put()
// app.post()
// app.delete()

// Route Parameters
// app.get('/courses/:id', (req, res) =>{
//     res.send(req.params.id)
// })


let courses = [
    {id: 1, name: 'JavaScript'},
    {id: 2, name: 'C++'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'Python'}
]

// app.get('/courses/:name', (req, res) => {
//     // console.log(req.params)
//     // let course = courses.find(courses => courses.id === parseInt(req.params.id))
//     let course = courses.find(courses => courses.name === req.params.name)
//     if(!course) res.status(404).send('The course you are looking for does not available')
//     res.send(course)
// })

app.get('/courses', (req,res) => {
    res.send(courses)
})// read operations

// app.post('/courses', (req,res) =>{
//     const course = {
//         id : courses.length +1,
//         name : req.body.name
//     }// create operations
//     courses.push(course)
//     res.send(course)
// })

// app.put('/courses/:name', (req, res) =>{
//     let course = courses.find(courses =>courses.name === req.params.name)
//     if(!course) res.status(404).send('The course id you are looking for does not available')
//     course.name = req.body.name
//     res.send(course)
// } )// update

// delete method
// app.delete('/courses/:name', (req ,res)=>{
//     let UpdatedCourses = courses.filter(courses => courses.name !== req.params.name)
//     courses = UpdatedCourses
//     res.send(courses)
// })

// using id
app.delete('/courses/:id', (req,res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send('The course id you are looking for does not available')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App is running on ${port}`))
