const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('here');
});

router.get('/login', (req, res) => {
  res.send('login');
});

router.get('/logout', (req, res) => {
  res.send('logout');
});

router.get('/register', (req, res) => {
  res.send('register');
});

module.exports = router;
