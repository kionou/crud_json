var express = require('express');
const controlleurBlog = require('../controllers/AccueilControllers');
var router = express.Router();


/* GET home page. */
router.post('/',controlleurBlog.AccueilPost );

module.exports = router;
