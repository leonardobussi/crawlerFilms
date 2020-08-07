const express  = require('express');
const request = require('request')
const cheerio = require('cheerio')

const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

request('http://www.imdb.com/chart/moviemeter', function(err, res, body){

    if(err){
        console.log('Erro:'+err)
    }

    var $ = cheerio.load(body)

    $('.lister-list tr').each(function(){
        const title = $(this).find('.titleColumn a').text().trim()
        const rating = $(this).find('.imdbRating strong').text().trim()

        const dados = {title, rating}

        console.log(dados)

        app.get('/', function(req, res){
            return res.render('index',{dados: dados}); 
        })


    })
})



app.listen(3000, (err) => {
    if(err) {
        console.log('==> [-]  falha na aplicação');
    } else {
        console.log('==> [+] aplicação funcionando ');
    }
});

module.exports = app;


request('http://www.imdb.com/chart/moviemeter', function(err, res, body){

    if(err){
        console.log('Erro:'+err)
    }

    var $ = cheerio.load(body)

    $('.lister-list tr').each(function(){
        const title = $(this).find('.titleColumn a').text().trim()
        const rating = $(this).find('.imdbRating strong').text().trim()

        const dados = {title, rating}


        return dados
    })
})



