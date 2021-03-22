const express = require('express');
const app = express();
const port = 2100;

app.get('/', (req, res) => {
    res.send('Get message');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Post message');
});

app.listen(port, () => {
    console.log('Server work at https://localhost:' + port);
})