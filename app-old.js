
const http = require('http');



http.createServer( (req, res) =>{
    console.log(req);

    // res.setHeader('Content-Disposition', 'attachmen; filename=lista.csv')
    // res.writeHead(200,{ 'Content-type': 'apliccation/csv'});
    
    

    res.write('Hola Mundo');

    res.end();

})
.listen( 8081 );
console.log('Escuchando el puerto', 8081);