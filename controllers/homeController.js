const Url = require('../models/Url');
const { nanoid } = require('nanoid');

const leerUrls = async(req, res) => {
    const urls = [
        {origin: 'www.google.com/bluuweb1', shortUrl: 'aksdas1'},
        {origin: 'www.google.com/bluuweb2', shortUrl: 'aksdas2'},
        {origin: 'www.google.com/bluuweb3', shortUrl: 'asda663'},
        {origin: 'www.google.com/bluuweb4', shortUrl: 'asda664'},
    ];

    res.render('home', { urls });
}

const agregarUrl = async(req,res) => {

    const { origin } = req.body;

    try {
        const url = new Url({
            origin,
            shortURL: nanoid(8),
        });

        await url.save();
        res.redirect('/');

    } catch(error) {
        console.log(error);
        res.send('Error, algo falló');
    }

}

module.exports = {
    leerUrls,
    agregarUrl,
}