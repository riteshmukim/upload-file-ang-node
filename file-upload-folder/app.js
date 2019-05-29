const  express  =  require('express')  
const  app  =  express()  
var cors = require('cors');
const  port  =  3000
const  multipart  =  require('connect-multiparty');  
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });

const bodyParser = require("body-parser");  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: true
}));
app.use(cors());

app.post('/api/upload', multipartMiddleware, (req, res) => {  
    res.json({
        'message': 'File uploaded successfully'
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))  