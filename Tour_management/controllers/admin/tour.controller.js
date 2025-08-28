const Tour = require("../../models/tour.model");

module.exports.list = async (req, res) => {

  const tourList = await Tour.find({});
  
  res.render('admin/pages/tour.pug', { 
    title: 'Hey', 
    message: 'Hello there!',
    tourList: tourList
  })
}