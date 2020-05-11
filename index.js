const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();
const connect = require("./Connect/connect");
const routers = require("./routers/");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v/", routers(router));

//server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set a static folder
  app.use(express.static("../build"));
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
}

const PORT = process.env.PORT || 3003;
// const PORT = 3003;

app.listen(PORT, () => console.log(`Server is now in port no ${PORT}`));

console.log("hello");
