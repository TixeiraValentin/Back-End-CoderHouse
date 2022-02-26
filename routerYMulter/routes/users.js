const express = require('express')

const router = express.Router()

let users = []

const middleware = (req,res,next) => {
    console.log("Peticion recibida en router users")
    next()
}


router.get('/',middleware,(req,res)=>{
    res.send({users:users})
})

router.post('/', (req,res) => {
    let user = req.body
    console.log(user)
    users.push(user)
    res.send({message: "User Created"})
})

module.exports = router