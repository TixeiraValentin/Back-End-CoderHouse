const express = require('express')
const multer = require('multer')
const usersRouter = require('./routes/users')
const petsRouter = require('./routes/pets')
const app = express()

const PORT = 8080
const server = app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/users', usersRouter)
app.use('/pets', petsRouter)

//STORAGE

let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/img')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ "-"+file.originalname)
    }
})
let uploader = multer({storage:storage})


app.post('/upload',uploader.single('file') ,(req,res)=>{
    let file = req.file
    console.log(req.body)
    res.send({message:file})
})

app.post('/uploadMultiple', uploader.array('files',2), (req,res)=>{
    let files = req.files
    res.send({files:files})
})