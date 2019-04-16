const express = require('express');

const app = express();
const port = 4000;
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => res.send({ echo: 'Hello World!' }));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
