const express  = require('express');
const bp = require('body-parser');
// const fs = require('fs')
const dadosNow = require('./MineraDados')

const app = express();


app.use(bp.json());
app.use(bp.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', function(req, res){
    return res.send('esta rodando')
}) 


app.listen(3000, (err) => {
    if(err) {
        console.log('==> [-]  falha na aplicação');
        dadosNow()
    } else {
        console.log('==> [+] aplicação funcionando ');
    }
});

module.exports = app;
