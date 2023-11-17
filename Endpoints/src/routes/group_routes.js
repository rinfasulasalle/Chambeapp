const express=require("express");
const groupSchema = require("../models/group_model");

const router = express.Router();

// create groups
router.post("/groups", (req, res)=>{
    const group = groupSchema(req.body);
    group
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all groups
router.get("/groups", (req, res)=>{
    groupSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a groups
router.get("/groups/:id", (req, res)=>{
    const{ id }=req.params;
    groupSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a groups
router.put("/groups/:id", (req, res)=>{
    const{ id }=req.params;
    const{ user_id, title, content, src_image, comments, status} = req.body;
    groupSchema
    .updateOne({ _id: id }, { $set: {user_id, title, content, src_image, comments, status} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a groups
router.delete("/groups/:id", (req, res)=>{
    const{ id }=req.params;
    groupSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router; 