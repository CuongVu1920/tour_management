const express = require('express');
const app = express();
const path = require("path");
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cuongvudev2911:Jrf3JdJlqwlKnr4h@cluster0.gdykxgc.mongodb.net/tour_management_2');

const Tour = mongoose.model('Tour', 
  { 
    name: String,
    vehicle: String,
  })


// Thiết lập views
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

// Thiết lập thư mục chứa file tĩnh của Frontend
app.use(express.static(path.join(__dirname, "public")));

app.get('/', async (req, res) => {

  const tourList = await Tour.find({});
  
  res.render('admin/pages/test.pug', { 
    title: 'Hey', 
    message: 'Hello there!',
    tourList: tourList
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
