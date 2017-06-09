const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/info', (req, res) => {
  res.send('info');
});

router.get('/list', (req, res) => {
  res.send('price');
});

router.get('/collection', (req, res) => {
  res.send('price');
});

module.exports = router;
