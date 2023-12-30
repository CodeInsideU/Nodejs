const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connections is successful'))
.catch(err=>console.log('Couldnt connect to mongoDb',err))

// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishDate: {type: Date, default: Date.now},
    isPublished: Boolean
})

// Model
const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name: 'Java',
        creator: 'ABC',
        isPublished: false
    })

    const result = await course.save()
    console.log(result)
}

async function getCourses(){
    const courses = await Course.find({creator: 'Vratik'}).select({name: 1, publishDate: 1}).sort({name: -1})
    console.log(courses)
}

// createCourse()
getCourses()
