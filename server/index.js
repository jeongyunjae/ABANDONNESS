const express = require("express"); //express 모듈 가져오기
const app = express(); //새로운 express() 앱 생성
let { User } = require("./models/User");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // json을 parse하도록 함
//application/json

//app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
}

app.get("/", function (req, res) {
  res.send("Hello World!!!");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err)
      return res.json({
        success: false,
        err,
      });
    else
      return res.status(200).json({
        success: true,
      });
  });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});
