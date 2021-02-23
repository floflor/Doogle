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
           .then(dt =>{
            
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
                    for (var i in array2){
                        await Temperamento.create({ name: array2[i] });  
                    }   
                    await Temperamento.findAll().then(data => result = data )
                }           
                return res.json(result);
            })     
          
        });
});


// POST /dog 

router.post('/dog', async (req, res) => {
    var temperamentoId;
    var dogId;
    const { name, weight, height, life_span, temps } = req.body;
    if (name && weight && height && life_span && temps) {
        await Dog.create({ name, weight, height, life_span });

        await Temperamento.findOne({ where: { name: temps } })
            .then(data => { temperamentoId = data.id })
        await Dog.findOne({ where: { name: name } })
            .then(dato => { dogId = dato.id })

        tablaIntermedia.create({ dogId, temperamentoId });

        res.send('Dog created!');
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
