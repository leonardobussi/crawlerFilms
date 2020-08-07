const request = require('request')
const cheerio = require('cheerio')

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
    })
})