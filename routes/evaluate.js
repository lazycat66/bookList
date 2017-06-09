const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/save', (req, res) => {
  res.send('logout');
});

router.get('/remove', (req, res) => {
  res.send('register');
});

router.get('/edit', (req, res) => {
  res.send('register');
});

module.exports = router;
