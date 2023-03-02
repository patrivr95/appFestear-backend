const router = require('express').Router();

const Blog = require('../models/blog.model');


router.get('/', async (req, res) => {

    const blog = await Blog.getAll();

    res.json(blog);
});



module.exports = router;