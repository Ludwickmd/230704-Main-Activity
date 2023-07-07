const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    bookTitle : {
        type : String,
        require : [true, "Book title is required"]
    },
     bookNo : {
        type : String,
        require : [true, "Book number is required"]
    },
     isAdmin : {
        type : Boolean,
        default : false
    },
     status : {
        type : String,
        default : "Available"
    },
});

module.exports = mongoose.model("Course", courseSchema);