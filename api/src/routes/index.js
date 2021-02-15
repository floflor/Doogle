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



// GET /dogs && dogs?name
router.get('/dogs', (req, res) => {
    console.log('entro');
    //if query attached
    if (req.query.name) {
        fetch(`https://api.thedogapi.com/v1/breeds/search?name=${req.query.name}&apikey=${key}`)
            .then(r => r.json())
            .then(data => {
                var myRes = [];

                for (let i = 0; i < 8 && i < data.length; i++) {
                    myRes.push(data[i])
                }

                res.json(myRes)
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
                        image: dt.url
                    }

                    myArr.push(myObj);


                    return res.json(myArr);
                })
            return;
        })
});


// GET /temperament 

router.get('/temperament', (req, res) => {

})



module.exports = router;
