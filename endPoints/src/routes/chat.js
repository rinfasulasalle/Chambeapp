const express = require("express");
const chatSchema = require("../models/chat");

const router = express.Router();

//create chat
router.post("/chats",(req,res) => {
    const chat = chatSchema(req.body);
    chat
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get all chats
router.get("/chats",(req,res) => {
    chatSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get a chat
router.get("/chats/:id",(req,res) => {
    const { id } = req.params;
    chatSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// update a chat
router.put("/chats/:id",(req,res) => {
    const { id } = req.params;
    const { participantes, content} = req.body;
    chatSchema
        .updateOne({ _id : id },{ $set: { participantes, content } })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// delete a chat
router.delete("/chats/:id",(req,res) => {
    const { id } = req.params;
    chatSchema
        .deleteOne({ _id : id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;