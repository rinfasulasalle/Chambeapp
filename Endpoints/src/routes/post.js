const expres=require("express");
const postSchema = require("../models/post");

const router = expres.Router();

// create post
router.post("/posts", (req, res)=>{
    const post = postSchema(req.body);
    post
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all post
router.get("/posts", (req, res)=>{
    postSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a post
router.get("/posts/:id", (req, res)=>{
    const{ id }=req.params;
    postSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a post
router.put("/posts/:id", (req, res)=>{
    const{ id }=req.params;
    const{ user_id, title, content, src_image, comments, status} = req.body;
    postSchema
    .updateOne({ _id: id }, { $set: {user_id, title, content, src_image, comments, status} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a post
router.delete("/posts/:id", (req, res)=>{
    const{ id }=req.params;
    postSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router; 