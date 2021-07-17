const express = require('express');
const sequelize = require('./config/connection')
const routes = require('./routes');
// import sequelize connection

//set up express app
const app = express();
const PORT = process.env.PORT || 3001;

//setting up express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//youtes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() =>{
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
})
