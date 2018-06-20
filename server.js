var express = require('express');
var hbs = require('hbs')

var app = express();

var port = process.env.PORT||3000

hbs.registerPartials(__dirname +'/views/partials')
app.set('viewEngine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.render('home.hbs',{
      title:'home page',
      currentYear: new Date().getFullYear(),
      welcome:'Welcome to home page'
    });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
      title:'About page',
      currentYear: new Date().getFullYear()
    });
});

app.get('/bad',(req,res) => {
    res.send({
      error:'unable to load'
    });
});


app.listen(3000,()=>{
	console.log(`server listen at port ${port}`);
});
