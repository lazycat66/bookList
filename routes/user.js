const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('here');
});

router.get('/info', (req, res) => {
  res.send('info');
});

router.get('/myEvaluate', (req, res) => {
  res.send('myEvaluate');
});

router.get('/collectionList', (req, res) => {
  res.send('collectionList');
});

module.exports = router;
