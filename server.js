const dotenv = require('dotenv');
dotenv.config();

const pagos = require('./app/routes/routes.js');
//const cors = require("cors");
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

//app.use(cors);

//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

//app.use('/pagos', pagos);

app.get("/", (req, res) => {
  res.json({ message: "Server is up and running" });
});

  const PORT = process.env.PORT || 8080;
  const TZ = process.env.TZ || 'America/Mexico_City';

  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} with timezone ${TZ}`);
  });