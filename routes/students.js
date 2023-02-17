const express = require('express') 
const router = express.Router()
const StudentModel = require('../models/Student')

router.get('/', async (req,res) =>{
    StudentModel.find((error,data) =>{
        if(error){
            res.status(500).send('Error')
        }else{
            res.status(200).send(data)
        }
    })
})


router.post('/create',async (req,res)=> {
    StudentModel.create(req.body,(error,data) =>{
        if(error){
            res.status(500).send('Error')
        }else{
            res.status(200).send(data)
        }
    })
})

router.delete('/:id',async (req,res)=>{
    StudentModel.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            res.status(500).send('Error')
        }else{
            res.status(200).send(data)
        }
    })
})

router.put('/updata/:id', async (req,res)=>{
    StudentModel.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
        if(error){
            res.status(500).send('Error')
        }else{
            res.status(200).send(data)
        }
    })
})
module.exports = router