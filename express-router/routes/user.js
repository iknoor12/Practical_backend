const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('All users data');
});

router.get('/profile', (req, res) => {
    res.send('User profile data');
});

router.post('/create', (req, res) => {
    res.send('user created');
});

module.exports = router;