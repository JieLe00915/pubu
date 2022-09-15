const express = require('express')
const router = express.Router();
const homehot = require('./data/home/homehot')
const searchData = require('./data/search')
router.get('/home/hot1', (req, res) => {
    res.send({
        status: 200,
        result: homehot.hot1,
    })
})
router.get('/search', (req, res) => {
    res.send({
        status: 200,
        result: searchData

    })
})

module.exports = router