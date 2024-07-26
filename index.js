const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connect/db'); 
const studentsRoutes = require('./routes/student.router');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB(); 


app.use('/students', studentsRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
