const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers')

app.use(router)

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`)
});