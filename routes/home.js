const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const urls = [
        {origin: 'www.google.com/bluuweb1', shortUrl: 'aksdas1'},
        {origin: 'www.google.com/bluuweb2', shortUrl: 'aksdas2'},
        {origin: 'www.google.com/bluuweb3', shortUrl: 'asda663'},
        {origin: 'www.google.com/bluuweb4', shortUrl: 'asda664'},
    ];

    res.render('home', { urls });
}); 



module.exports = router;