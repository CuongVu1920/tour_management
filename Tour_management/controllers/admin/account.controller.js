// giao diện trang đăng nhập
module.exports.login = async (req, res) => {
  res.render("admin/pages/login.pug", {
    pageTitle: "Đăng nhập"
  })
};