const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const typeRouter = require("./routes/typeRoutes");
const commentRouter = require("./routes/commentRoutes");




const app = express();
app.use(cors({ origin: "http://localhost:3000/" }));
app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use("/users", userRouter);
app.use("/blogs", blogRouter);
app.use("/types", typeRouter);
app.use("/comments", commentRouter);


require("./db");
module.exports = app;
