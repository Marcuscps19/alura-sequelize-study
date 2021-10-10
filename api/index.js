const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/teste', (req, res) => res
  .status(200)
  .send({ message: 'Welcome' }));

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;
