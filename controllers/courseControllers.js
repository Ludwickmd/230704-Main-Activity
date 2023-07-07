const Course = require('../models/Course');

module.exports.check = (reqBody) => {
    //result is sent back to the front end via the then method found in the route file.
    return Course.find({bookTitle: reqBody.bookTitle})
        .then(result => {
            // the find method returns a record if a match is found.
            if (result.length > 8){
                return true;
                //no duplication email found 
                //the user is not yet registered
            } else {
                return false;
            };
        });
};