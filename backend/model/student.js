const mongoose=require('mongoose')
var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Department:String,
    Mark:Number
})
var StudentModel=mongoose.model("student",schema)
module.exports=StudentModel