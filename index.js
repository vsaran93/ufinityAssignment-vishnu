
const express = require('express');
const app = express();
const port = 3006;

app.get('/', (req, res) => {
    res.send('Welcome to Assignment');
})


app.listen(port, () => {
    console.log(`App is currently running in port ${port} !`);
})