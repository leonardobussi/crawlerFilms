const express  = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'))

var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
		//Crawler.fs      = require('fs');
		Crawler.getMovies();

	},
	getMovies: function(dados = []){
		Crawler.request('http://www.imdb.com/chart/moviemeter', function(err, res, body){
			if(err)
				console.log('Error: ' + err);
			var $ = Crawler.cheerio.load(body);
			$('.lister-list tr').each(function(){
				var title  = $(this).find('.titleColumn a').text().trim();
				var rating = $(this).find('.imdbRating strong').text().trim();
				//Crawler.fs.appendFile('imdb.txt', title + ' - ' + rating + '\n');
				if(rating == ''){
					rating = "sem avaliação"
				}
				var response = {title, rating}
				dados.push(response)
				
			});
		
		

			app.get('/', function(req, res){ 
				return res.render('index', {dados: dados})
			}) 
		});
	}
};
Crawler.init();

app.listen(3000, (err) => {
    if(err) {
        console.log('==> [-]  falha na aplicação');
    } else {
        console.log('==> [+] aplicação funcionando ');
    }
});