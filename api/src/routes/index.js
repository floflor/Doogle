const { Router, request } = require('express');
var bodyParser = require('body-parser');
const fetch = require("node-fetch");
const { Dog, Temperamento, tablaIntermedia } = require('../db');
const Temperament = require('../models/Temperament');

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
            .then(async data => {

                if (data[0]) {
                    var myRes = [];
                    var dbArray = []

                    for (let i = 0; i < 8 && i < data.length; i++) {
                        myRes.push(data[i])
                    }
                    await Dog.findAll().then(tabla => tabla.forEach(c => c.dataValues.name.includes(req.query.name) ? dbArray.push(c.dataValues) : console.log('no hay db para esa busqueda')))
                    return res.send(myRes.concat(dbArray))
                }
                else{ return res.status(404).send("Dog not found")}
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
                        image: data[random].image,
                        id: data[random].id
                    }
                    myRes.push(myObj);
                }
                res.json(myRes);
            })
    }

});



// GET dogs/{idRaza}

router.get('/dogs/:idRaza', (req, res) => {
    fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${req.params.idRaza}`)
        .then(r => r.json())
        .then(dt => {

            if (dt[0]) {

                var myArr = [];

                var myObj = {
                    temperament: dt[0].breeds.temperament,
                    name: dt[0].breeds[0].name,
                    image: dt[0].url,
                    weight: dt[0].breeds[0].weight.metric,
                    height: dt[0].breeds[0].height.metric,
                    lifeSpan: dt[0].breeds[0].life_span
                }

                myArr.push(myObj);
                return res.json(dt);
            }

            return res.status(404).send('Dog not found')
        })



});

// GET /temperaments

router.get('/temperaments', (req, res) => {
    var temps = [];

    fetch('https://api.thedogapi.com/v1/breeds')
        .then(r => r.json())
        .then(async data => {
            await Temperamento.findAll().then(async tabla => {
                var result = tabla;
                if (tabla.length === 0) {
                    data.forEach(c => temps.push(c.temperament ? c.temperament.split(',' && ', ') : 'Cutie'));
                    var array2 = Array.from(new Set(temps.flat()))
                    for (var i in array2) {
                        await Temperamento.create({ name: array2[i] });
                    }
                    await Temperamento.findAll().then(data => result = data)
                }
                return res.json(result);
            })

        });
});


// POST /dog 

var idD = 0;
router.post('/dog', async (req, res) => {

    var temperamentoId;
    var dogId;
    idD++;

    const { name, weight, height, life_span, temps } = req.body;
    if (name && weight && height && life_span && temps) {
        await Dog.create({ id: idD + 'b', name, weight, height, life_span, cbm: 'yes', temperament: temps });
        await Temperamento.findOne({ where: { name: temps } })
            .then(data => { temperamentoId = data.id })
        await Dog.findOne({ where: { name: name } })
            .then(dato => { dogId = dato.id })

        tablaIntermedia.create({ dogId, temperamentoId });


       return res.send('Dog created!');
    }
   

})

//Get dogs Database 

router.get('/dog', async (req, res) => {
    var myArr = [];
    await Dog.findAll()
        .then(data => { myArr = data; });
    res.send(myArr)
})

//POST temperament 


module.exports = router;
