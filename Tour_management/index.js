const express = require('express');
const app = express();
const path = require("path");
const port = 3000;

// Thiết lập views
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

// Thiết lập thư mục chứa file tĩnh của Frontend
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('admin/pages/test.pug', { 
    title: 'Hey', 
    message: 'Hello there!' 
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
