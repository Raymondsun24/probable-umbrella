// Creating a http server using the http module
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('static'));

// app.use(express.json({limit: '1mb'}));

// app.use('/public', express.static(path.join(__dirname,'static')));
// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'static', 'index.html'));
// });
app.get('/:page', (req,res)=>{
    res.sendFile(path.join(__dirname,'static', req.params.page));
});

// app.post('/api', (req,res)=>{
//     console.log(req.body);
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT);

