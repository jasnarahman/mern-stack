// import
const express=require("express")
require("./connection")
var StudentModel=require("./model/student")
var cors=require('cors')
//initialize
const app=express()
app.use(cors())
//mid
app.use(express.json())

//api creation
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('trial api')
})
//add

app.post('/add',(req,res) => {
 StudentModel(req.body).save()
 res.send("data added")
})
//update
app.put('edit/:id',async(req,res)=>{
    await StudentModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("data updated")
})
//delete
app.delete('/remove/:id',async(req,res)=>{
    await StudentModel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})
//view
app.get('/view',async(req,res)=>{
    var data=await StudentModel.find()
    res.send(data)
})
//port setting
app.listen(3009,()=>{
    console.log('Server is running on http://localhost:3009')
})