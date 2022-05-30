

const loginForm = (req, res) => {


    res.render('login');

}

const registerUser = async (req, res) => {


    console.log(req.body);

    res.json(req.body);


}


const registerForm = (req, res) => {

    res.render('register');


}

module.exports = {
    loginForm,
    registerUser,
    registerForm,
}