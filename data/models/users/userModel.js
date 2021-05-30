const mongodb = require('mongoose');
const router = require('express').Router();
const User = require('./userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../auth/auth');


// exports.registerUser = (req, res) => {
//     const { firstName, lastName, email, password } = req.body;

//     // check required fields
//     if(!firstName || !lastName || !email || !password) {
//         return res.status(400).json({ msg: 'Fyll i alla fält' });
//     }
//     // check password length
//     if(password.length < 6) {
//         return res.status(400).json({ msg: 'Lösenordet bör vara minst 6 tecken'});
//     }

//     User.findOne({ email: email })
//         .then((user) => {
//             if(user) return res.status(400).json({ msg: 'Användaren finns redan'});

//             // Create new user
//             const newUser = new User({
//                 firstName,
//                 lastName, 
//                 email,
//                 password
//             });

//             // password hash
//             bcrypt.genSalt(12, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if(err) throw err;

//                     newUser.password = hash;

//                     // save user
//                     newUser
//                         .save()
//                         .then(
//                             res.json({
//                                 msg: 'Registreringen lyckades'
//                             })
//                         )
//                         .catch((err) => console.log(err));
//                 })
//             })
//         })
// }

// exports.loginUser = (req, res) => {
//     const { email, password } = req.body;

//     // basic validation
//     if(!email || !password) {
//         return res.status(400).json({ msg: 'Fyll i alla fälten' });
//     }

//     // check if user exists
//     User.findOne({ email })
//         .then((user) => {
//             if(!user) return res.status(400).json({ msg: 'Användaren finns inte'});
        

//         // validate password
//         bcrypt.compare(password, user.password)
//             .then((isMatch) => {
//                 if(!isMatch) return res.status(400).json({ msg: 'Fel e-postadress eller lösenord'});

//                 // const sessUser = { is: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email };
//                 // req.session.user = sessUser;    //Auto save session data in mongo store

//                 res.json({ msg: 'Inloggningen lyckades' });
//             })
//         })
// }

exports.registerUser = (req, res) => {
    User.exists({ email: req.body.email }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'Mailadressen är redan registrerad'
                })
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            statusCode: 500,
                            status: false,
                            message: 'Misslyckades med att kryptera lösenordet'
                        })
                    }

                    const newUser = new User({
                        firstName:      req.body.firstName,
                        lastName:       req.body.lastName,
                        email:          req.body.email,
                        password:       hash
                    })

                    newUser.save()
                        .then(() => {
                            res.status(201).json({
                                statusCode: 201,
                                status: true,
                                message: 'Användaren har skapats'
                            })
                        })
                        .catch(() => {
                            res.status(500).json({
                                statusCode: 500,
                                status: false,
                                message: 'Misslyckades med att skapa användaren'
                            })
                        })
                })
            }
        }
    })
}

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if(user === null) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'Fel e-postadress eller lösenord'
                })
            }
            try {
                bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
                    if(err) {
                        return res.status(400).json(err)
                    }
                    else {
                        if(result) {
                            return res.status(200).json({
                                statusCode: 200,
                                status: true,
                                message: 'Autentisering lyckades',
                                token: auth.generateToken(user._id)
                            })
                        }
                        return res.status(401).json({
                            statusCode: 401,
                            status: false,
                            message: 'Fel e-postadress eller lösenord'
                        })
                    }
                })
            }
            catch {
                return res.status(500).json({
                    statusCode:500,
                    status: false,
                    message: 'Kunde inte autentisera användaren. Kontakta systemadministratören'
                })
            }
        })
}


exports.getOneUser = (req, res) => {
    User.exists( { _id: req.body._id }, (err, result) => {
        if(err) {
            return res.status(400).json(err)
        }
        else {
            if(result) {
                User.findById(req.body._id)
                    .then(user => res.status(200).json(user))
                    .catch(err => res.status(500).json(err))
            }
            else {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'Hittade inte användaren'
                })
            }
        }
    })
}