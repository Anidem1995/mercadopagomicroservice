const dotenv = require('dotenv');
dotenv.config();

const pagos = require('./app/routes/routes.js');
const express = require('express');

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/pagos', pagos);

  const PORT = process.env.PORT || 8000;
  const TZ = process.env.TZ || 'America/Mexico_City';

  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} with timezone ${TZ}`);
  });