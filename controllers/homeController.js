const Url = require('../models/Url');
const { nanoid } = require('nanoid');


const leerUrls = async(req, res) => {

    try {

        const urls = await Url.find().lean();
        res.render('home', { urls });

    } catch(error) {
        console.log(error);
        res.send('falló algo...');
    }

};


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

};


const eliminarUrl = async(req, res) => {

    const { id } = req.params;

    try {

        await Url.findByIdAndDelete(id);

        res.redirect('/');

    } catch(error) {
        console.log(error);
        res.send('Error, algo falló');
    }

}

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
}