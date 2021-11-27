const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const useRouter = require("./routes");
const helper = require("./data");

let isAdmin = true;
app.use(express.json());
app.use("/admin/", (req, res, next) => {
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("You are UnAuthorised");
  }
});
app.use(useRouter);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200);
  res.render("base", { helper: helper });
});

app.get("*", (req, res) => {
  res.status(404).sendfile(`./src/404img.jpg`);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
