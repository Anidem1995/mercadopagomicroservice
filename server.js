const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

dotenv.config();

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  const run = async () => {
      require('./app/routes/routes.js')(app);
  };

  const PORT = process.env.PORT || 8000;
  const TZ = process.env.TZ || 'America/Mexico_City';

  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} with timezone ${TZ}`);
  });

  run().then(() => {});