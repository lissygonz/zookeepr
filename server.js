const { animals } = require('./data/animals');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const routes = require('./routes');


// parse incoming JSON data
app.use(express.json());
  // parse incoming string or array data
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  app.use(routes);

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
 
   

