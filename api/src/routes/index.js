const { Router, request } = require('express');
var bodyParser = require('body-parser');
const fetch = require("node-fetch");
const { Dog, Temperamento } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use(bodyParser.json());
require('run-middleware')(router);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const key = '969b5fbc-8212-491d-80f3-a84877eab206';



// GET /dogs && dogs?name
router.get('/dogs', (req, res) => {
   
    //if query attached
    if (req.query.name) {
        fetch(`https://api.thedogapi.com/v1/breeds/search?name=${req.query.name}&apikey=${key}`)
            .then(r => r.json())
            .then(data => {
                var myRes = [];

                for (let i = 0; i < 8 && i < data.length; i++) {
                    myRes.push(data[i])
                }
        
                return res.send(myRes)
             
            });
    }
    //if just /dog
    else {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(r => r.json())
            .then(data => {
                var myRes = [];
                for (let i = 0; i < 8; i++) {
                    var random = Math.floor(Math.random() * 100) + 1;
                    var myObj = {
                        temperament: data[random].temperament,
                        name: data[random].name,
                        image: data[random].image
                    }
                    myRes.push(myObj);
                }
                res.json(myRes);
            })
    }
    
});



// GET dogs/{idRaza}

router.get('/dogs/:idRaza', (req, res) => {
    console.log(req.params.idRaza);
    fetch(`https://api.thedogapi.com/v1/breeds/search?name=${req.params.idRaza}&apikey=${key}`)
        .then(r => r.json())
        .then(data => {

            var referenceImg = data[0].reference_image_id;


            fetch(`https://api.thedogapi.com/v1/images/${referenceImg}`)
                .then(r => r.json())
                .then(dt => {
                    console.log(referenceImg)
                    var myArr = [];

                    var myObj = {
                        temperament: dt.breeds[0].temperament,
                        name: dt.breeds[0].name,
                        image: dt.url,
                        weight: dt.breeds[0].weight,
                        height: dt.breeds[0].height,
                        lifeSpan: dt.breeds[0].life_span
                    }

                    myArr.push(myObj);


                    return res.json(myArr);
                })
            return;
        })
});

// GET /temperaments

router.get('/temperaments', (req, res) => {
    var temps = [];

    fetch('https://api.thedogapi.com/v1/breeds')
        .then(r => r.json())
        .then(data => {
            Temperamento.findAll().then(tabla => {
                if (tabla.length === 0) {
                    data.forEach(c => temps.push(c.temperament ? c.temperament.split(',' && ', ') : 'hola'));
                    var array2 = Array.from(new Set(temps.flat()))
                    array2.forEach(c => Temperamento.create({ name: c }));
                    return res.json(array2);
                }

                else {
                    return res.json(tabla);
                }

            });
        });
});


// POST /dog 

router.post('/dog', (req, res) => {
    const { name, weight, height, life_span } = req.body;
    if (name && weight && height && life_span) {
        Dog.create({ name, weight, height, life_span });
        res.send('Dog created!');
    }
})



module.exports = router;
