const express=require("express");
const userSchema = require("../models/user_model");

const router = express.Router();

// create users
router.post("/users", (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/users", (req, res)=>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a users
router.get("/users/:id", (req, res)=>{
    const{ id }=req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a users
router.put("/users/:id", (req, res)=>{
    const{ id }=req.params;
    const{ user_id, title, content, src_image, comments, status} = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {user_id, title, content, src_image, comments, status} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a users
router.delete("/users/:id", (req, res)=>{
    const{ id }=req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router; 