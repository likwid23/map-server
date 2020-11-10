const express = require('express');

const messages = require('./messages');

const router = express.Router();

router.get('/', (req, res) => {
  messages
    .find()
    .then(allMessages => {
      res.json(allMessages);
    });
});

router.use('/messages', messages);

module.exports = router;
