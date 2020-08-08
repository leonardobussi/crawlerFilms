const request = require('request')
const cheerio = require('cheerio')


    
exports.dadosNow = function(){ 
        request('http://www.imdb.com/chart/moviemeter', function (err, body){

        if(err){
            console.log('Erro: '+err)
        }

        const $ = cheerio.load(body)

        $('.lister-list tr').each(function main(){
            const title = $(this).find('.titleColumn a').text().trim()
            const rating = $(this).find('.imdbRating strong').text().trim()


            const dadosEmJson = {title, rating}
            console.log(dadosEmJson)
            return
        })
    })
}
