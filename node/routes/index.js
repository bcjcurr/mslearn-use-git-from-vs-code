const express = require('express');
const router = express.Router();
// jeff comment update
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
