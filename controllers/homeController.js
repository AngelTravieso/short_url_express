const Url = require('../models/Url');
const { nanoid } = require('nanoid');
const { send } = require('express/lib/response');


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

};


const editarUrlForm = async(req,res) => {

    const { id } = req.params;

    try {

        const url = await Url.findById(id).lean();
        res.render('home', { url });

    } catch(error) {
        console.log(error);
        res.send('Error, algo falló');
    }

};


const editarUrl = async(req, res) => {

    const { id } = req.params;
    const { origin } = req.body;

    try {

        await Url.findByIdAndUpdate(id, { origin });
        res.redirect('/');

    } catch(error) {
        console.log(error);
        res.send('Error, algo falló');

    }

};


const redireccionamiento = async(req, res) => {

    const { shortURL } = req.params;

    try {

        const urlDB = await Url.findOne({ shortURL });

        console.log(urlDB);
        
        res.redirect(urlDB.origin);

    } catch(error) {
        console.log(error);
        res.send('Error, algo falló');
    }

};



module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamiento
}