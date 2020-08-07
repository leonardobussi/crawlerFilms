const express  = require('express');
const Spyder = require('./Spyder') 

const app = express();

app.set('view engine', 'ejs');
//app.use(expressLayouts);
app.set('views', 'views');

app.listen(2999, (err) => {
    if(err) {
        console.log('==> [-]  falha na aplicação');
    } else {
        console.log('==> [+] aplicação funcionando ');
        console.log(Spyder)
    }
});

module.exports = app;