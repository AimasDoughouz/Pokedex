const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', function(req, res) {
    res.render('home', {title: 'Home'});
});
router.get('/about', function(req, res) {
    res.render('about', {title: 'About'});
});

router.get('/app', async function(req, res) {
    let getData = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
    .then(resp => resp.json())
    .then(resp => resp.results)
    .then(resp => {
        let pokeNamesArr = [];
        for(let i = 0; i < resp.length; i++) {
            pokeNamesArr.push(resp[i].name);
        }
        return pokeNamesArr.sort();
    });    
    res.render('app' , { pokeName: getData, title: 'App' }); 
});


module.exports = router;