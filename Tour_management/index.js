const express = require('express');
require('dotenv').config()
const app = express();
const path = require("path");
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

const tourController = require("./controllers/admin/tour.controller")
const homeController = require("./controllers/client/home.controller");

// Thiết lập views
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

// Thiết lập thư mục chứa file tĩnh của Frontend
app.use(express.static(path.join(__dirname, "public")));

app.get('/', homeController.home);

app.get('/tour', tourController.list);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
