const Visitor = require("../model/visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  console.log(Visitor.getVisitors);
  res.render("visitior", { data: Visitor.getVisitors() });
};
