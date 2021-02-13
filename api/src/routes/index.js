const { Router, request } = require('express');
var bodyParser = require('body-parser');
const fetch = require("node-fetch");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use(bodyParser.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const key = '969b5fbc-8212-491d-80f3-a84877eab206';

// GET /dogs
router.get('/dogs', (req, res) => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(r => r.json())
        .then(data => {
            var myRes = [];
            for (let i = 0; i < 8; i++) {
                var random = Math.floor(Math.random() * 100) + 1;
                myRes.push(data[random]);
            }
            res.json(myRes);
        })

});


// GET /dogs?name=
router.get('/dogs', (req, res) => {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${req.query.name}&apikey=${key}`)
        .then(r => r.json())
        .then(data => {
            var myRes = [];

            for (let i = 0; i < 8 && i < data.length; i++) {
                myRes.push(data[i])
            }

            res.json(myRes)
        })
});

module.exports = router;
