const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connections is successful'))
.catch(err=>console.log('Couldnt connect to mongoDb',err))

// Schema
const courseSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 5, maxlength: 200},
    tags: {type : Array, validate : {
        validator : function(tags){
            return tags.length > 1
        }
    }},
    category: {
        type: String,
        required : true,
        enum : ['DSA', 'WEB', 'Mobile', 'Data Science']
    },
    creator: {type: String, required: true},
    publishDate: {type: Date, default: Date.now},
    isPublished: {type: Boolean, required: true},
    rating: {type: Number, required: function(){return this.isPublished}}
})

// Model
const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name: 'MongoDb',
        creator: 'John Doe',
        category: 'DSA',
        tags: ['express'],
        rating: 4.5,
        isPublished: false
        // creator: 'DEF',
        // isPublished: true,
        // rating: 3.0
    })
    try{
        await course.validate()
    //     const result = await course.save()
    // console.log(result)
    }
    catch(error){
        // console.error(error.message)
        for (field in error.errors){
            console.log(error.errors[field])
        }
    }

    
}// creating

// Ratings 0 to 5
// eq(equal)

// gt(greater than)
// gte(greater than and equal to)
// lt
// lte
// in
// not in

// logical operator
// or
// and
async function getCourses(){
    // const courses = await Course.find({rating: {$gte : 4}}).select({name: 1, publishDate: 1})
    const courses = await Course.find({rating: {$in: [3,4.5]}}).select({name: 1, publishDate: 1}).and([{creator: 'DEF'},{rating:3}])
    console.log(courses)
}//reading course





// createCourse()
// getCourses()

async function updateCourse(id){
    let course = await Course.findById(id)
    if(!course) return;

    course.name = 'Python'
    course.creator = 'Steve'

    const updateCourse = await course.save()
    console.log(updateCourse)

}//update course

// updateCourse('65942374a680f85280da72dd')

// Deleting
async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}
// deleteCourse('658fab9564d831065e270ceb')

createCourse()