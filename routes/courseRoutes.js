const express = require('express');
const router = express.Router();
const courseControllers = require('../controllers/courseControllers');

router.post('/check', (req, res) => {
    console.log('hi');
    courseControllers.check(req.body)
    .then(resultFromController => res.send(resultFromController));
});

module.exports = router;