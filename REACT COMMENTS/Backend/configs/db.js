const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://Ajit:Ajit5566@cluster0.gzfki.mongodb.net/comments")
}

// mongodb+srv://Ajit:<password>@cluster0.gzfki.mongodb.net/test