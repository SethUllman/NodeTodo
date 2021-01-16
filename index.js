const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);


dotenv.config();

const app = express();

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/',(req, res) => {
  
  res.render('todo.ejs')
  
});

app.post('/',(req, res) => {
  
  console.log(req.body);
  
})

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db!");
  app.listen(3000, () => console.log("Server Up and running"));
})