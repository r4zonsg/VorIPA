const express = require("express");
const router = express.Router();
const dao = require("../models/dataAcessObject")


router.post("/", (req, res) => {
    console.log(req.body)
    dao.postMessage(req.body).then(message => {
        res.status(200).json(message)
    }).catch(error =>{
        res.status(500).json(error)
        console.log(error)
    })
})


router.get("/", (req, res) => {
    dao.getMessages().then(messages => {
        res.status(200).json(messages)
    }).catch(error =>{
        res.status(500).json(error)
    })
   
})


router.get("/:id", (req, res) => {
    dao.getMessageById(req.params.id).then(message => {
        res.status(200).json(message)
    }).catch(error => {
        res.status(500).json(error)
        console.log(error)

    })
})


module.exports = router