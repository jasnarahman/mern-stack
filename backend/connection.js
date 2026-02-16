const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://jasnaabdua_db_user:jasna5@cluster0.l1vu1wj.mongodb.net/ttkk?appName=Cluster0")
.then(()=>{
    console.log('connected')
})
    .catch(()=>{
        console.log(err)
    
})