const application = require("express");
const app = application();

let isAdmin = false;

function changeAdmin() {
  app.post("/", (req, res) => {
    console.log(req.addListener);
  });
}

module.exports = {
  isAdmin: isAdmin,
  changeAdmin: changeAdmin()
};
