const { application } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('testing PL/SQL')
});

app.get('/about', (req, res) => {
    res.send('Acerca de este servicio')
});

app.get('/test', (req, res) => {
    res.send('<h1>Hola test</h2>')
});

app.listen(3068, () => {
    console.log("Serve on port 3068")
});

