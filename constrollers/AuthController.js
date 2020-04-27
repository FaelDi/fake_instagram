const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },
    login: (req,res) => {
        let email = req.body.email;
        let password = req.body.password;
        console.log(email);
        res.redirect("home");
    }
}

module.exports = AuthController;