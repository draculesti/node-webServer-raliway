require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

app.get('/',  (req, res) => {
  res.render('home',{
    nombre:'Ivonne Garcia',
    titulo:'Curso de Node'

  })
});
app.get('/generic',  (req, res) => {
  res.render('generic',{
    nombre:'Ivonne Garcia',
    titulo:'Curso de Node'

  })
});

app.get('/elements',  (req, res) => {
  res.render('elements',{
    nombre:'Ivonne Garcia',
    titulo:'Curso de Node'

  })
});

// app.get('/index',  (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });
// app.get('/generic',  (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements',  (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

app.get('/hola-mundo',  (req, res) => {
  res.send('Hola mundo');
});

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })