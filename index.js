const { application } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('testing PL/SQL')
});

app.get('/about', (req, res) => {
    res.send('Acerca de este servicio')
})

app.listen(3066, () => {
    console.log("Serve on port 3066")
});

